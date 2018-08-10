import { h } from '@bolt/core/renderers';

export const AssetInteractive = ({ bgColor, fgColor, size, ...otherProps }) => {
  return (
    <svg width={size} height={size} {...otherProps} viewBox="0 0 24 24">
      <g fill="none" fill-rule="evenodd">
        <path
          d="M5.428 5.54a.74.74 0 0 0-.737-.738H1.737a.74.74 0 0 0 0 1.48h2.954c.406 0 .737-.331.737-.741"
          fill={bgColor}
        />
        <path
          d="M22.14 5.477c0-.01-.006-.015-.006-.024a.726.726 0 0 0-.183-.441c-.01-.013-.004-.032-.017-.043-.01-.013-.031-.007-.042-.018-.028-.024-.061-.04-.092-.061l-2.873-2.878a.709.709 0 1 0-1.002 1.002l1.74 1.745h-7.057a3.031 3.031 0 0 0-3.02-2.913 3.038 3.038 0 0 0-3.034 3.033v7.33l-.244-.243c-.984-.99-2.723-.987-3.707-.002a2.598 2.598 0 0 0-.766 1.854c0 .701.271 1.36.689 1.767l4.803 6.21a.92.92 0 0 0 1.295.166.923.923 0 0 0 .166-1.294l-4.882-6.3a.768.768 0 0 1-.225-.55c0-.206.08-.402.225-.546a.797.797 0 0 1 1.097 0l1.819 1.819a.916.916 0 0 0 1.006.2.92.92 0 0 0 .57-.852v-9.56a1.19 1.19 0 0 1 1.187-1.186c.656 0 1.187.533 1.187 1.187v6.059c0 .399.253.751.632.877l4.13 1.377a3.32 3.32 0 0 1 2.272 3.153v4.885a.922.922 0 1 0 1.846 0v-4.885c0-2.228-1.42-4.2-3.535-4.905l-3.499-1.167V6.238h7.045l-1.74 1.744a.709.709 0 1 0 1.002 1.003L21.8 6.107c.031-.02.064-.037.09-.061.013-.011.031-.008.044-.019.013-.01.008-.031.017-.044a.737.737 0 0 0 .183-.438c0-.009.005-.016.003-.027.002-.008.006-.013.006-.02 0-.008-.004-.015-.004-.021"
          fill={bgColor}
          mask="url(#mask-2)"
          transform="translate(1 .044)"
        />
      </g>
    </svg>
  );
};
