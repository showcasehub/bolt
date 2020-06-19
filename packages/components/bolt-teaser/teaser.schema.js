module.exports = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  title: 'Teaser',
  category: 'components',
  type: 'object',
  properties: {
    eyebrow: {
      type: 'object',
      description: 'Eyebrow text component',
      ref: '@bolt-components-headline/headline.schema.js'
    },
    headlines: {
      type: 'array',
      description: 'An array of headline component objects',
      items: {
        type: 'object',
        description: 'Headline text components',
        ref: '@bolt-components-headline/headline.schema.js'
      }
    },
    logo: {
      type: 'object',
      description: 'Bolt logo component',
      ref: '@bolt-components-logo/logo.schema.js'
    },
    content: {
      type: 'string',
      description: 'Body text of teaser'
    },
    contentItems: {
      type: 'array',
      description: 'Array of content item objects',
      items: {
        type: 'object'
      }
    },
    buttons: {
      type: 'array',
      description: 'An array of button component objects',
      items: {
        type: 'object',
        description: 'A button',
        ref: '@bolt-components-button/button.schema.js'
      }
    }
  }
}
