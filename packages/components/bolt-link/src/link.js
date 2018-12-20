import { props, define } from '@bolt/core/utils';
import { html, render } from '@bolt/core/renderers/renderer-lit-html';
import { BoltAction } from '@bolt/core/renderers/bolt-action';

import classNames from 'classnames/bind';

import styles from './link.scss';
import schema from '../link.schema.yml';

let cx = classNames.bind(styles);

@define
class BoltLink extends BoltAction {
  static is = 'bolt-link';

  static props = {
    url: props.string,
    target: props.string,
    isHeadline: props.boolean,
    onClick: props.string, // Managed by base class
    onClickTarget: props.string, // Managed by base class
  };

  // https://github.com/WebReflection/document-register-element#upgrading-the-constructor-context
  constructor(self) {
    self = super(self);
    self.rootElementTags = ['a'];
    return self;
  }

  render() {
    // validate the original prop data passed along -- returns back the validated data w/ added default values
    const { url, target, isHeadline } = this.validateProps(schema, this.props);

    const classes = cx('c-bolt-link', {
      'c-bolt-link--headline': isHeadline,
    });

    // Decide on if the rendered button tag should be a <button> or <a> tag, based on if a URL exists OR if a link was passed in from the getgo
    const hasUrl = this.props.url.length > 0 && this.props.url !== 'null';

    // Assign default target attribute value if one isn't specified
    const anchorTarget =
      this.props.target && hasUrl ? this.props.target : '_self';

    // The linkElement to render, based on the initial HTML passed alone.
    let renderedLink;

    const slotMarkup = name => {
      switch (name) {
        case 'before':
        case 'after':
          const iconClasses = cx('c-bolt-link__icon', {
            'is-empty': name in this.slots === false,
          });

          return html`
            <span class="${iconClasses}"
              >${
                name in this.slots
                  ? this.slot(name)
                  : html`
                      <slot name="${name}" />
                    `
              }</span
            >
          `;
        default:
          const itemClasses = cx('c-bolt-link__text', {
            'is-empty': name in this.slots === false,
          });

          return html`
            <span class="${itemClasses}"
              >${
                name in this.slots
                  ? this.slot('default')
                  : html`
                      <slot />
                    `
              }</span
            >
          `;
      }
    };

    const innerSlots = [
      slotMarkup('before'),
      slotMarkup('default'),
      slotMarkup('after'),
    ];

    if (this.rootElement) {
      renderedLink = this.rootElement.firstChild.cloneNode(true);
      if (renderedLink.getAttribute('href') === null && hasUrl) {
        renderedLink.setAttribute('href', this.props.url);
      }
      renderedLink.className += ' ' + classes;
      render(innerSlots, renderedLink);
    } else {
      renderedLink = html`
        <a href="${this.props.url}" class="${classes}" target="${anchorTarget}"
          >${innerSlots}</a
        >
      `;
    }

    return html`
      ${this.addStyles([styles])} ${renderedLink}
    `;
  }
}

export { BoltLink };
