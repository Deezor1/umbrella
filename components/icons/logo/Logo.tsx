import * as React from 'react';

type Props = {
  width?: number;
  height?: number;
};

const Logo = ({ width, height }: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width || '200'}
    height={height || '50'}
    viewBox='0 0 212 37'
    fill='none'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M87.5986 1.74805V12.5879C88.445 11.7741 89.389 11.1312 90.4307 10.6592C91.4723 10.1872 92.514 9.95117 93.5557 9.95117C95.9645 9.95117 98.1781 10.4964 100.196 11.5869C102.215 12.6611 103.818 14.1829 105.006 16.1523C106.21 18.1055 106.812 20.2865 106.812 22.6953C106.812 25.1042 106.21 27.2933 105.006 29.2627C103.818 31.2158 102.215 32.7376 100.196 33.8281C98.1781 34.9023 95.9645 35.4395 93.5557 35.4395C91.2445 35.4395 89.2588 34.6908 87.5986 33.1934V35H80.7627V1.74805H87.5986ZM87.5986 18.6914V27.1387C89.1774 29.1081 91.1631 30.0928 93.5557 30.0928C95.3298 30.0928 96.8271 29.3929 98.0479 27.9932C99.2848 26.5771 99.9033 24.8112 99.9033 22.6953C99.9033 20.5794 99.2848 18.8216 98.0479 17.4219C96.8271 16.0059 95.3298 15.2979 93.5557 15.2979C91.1794 15.2979 89.1937 16.429 87.5986 18.6914ZM39.8691 12.5391V10.3906H33.0088V35H39.8691V18.6914C40.569 17.5684 41.3909 16.722 42.335 16.1523C43.2952 15.5827 44.3044 15.2979 45.3623 15.2979C46.3389 15.2979 47.1771 15.4769 47.877 15.835C48.5768 16.193 49.1058 16.6813 49.4639 17.2998C49.8382 17.9183 50.1068 18.5775 50.2695 19.2773C50.4323 19.9772 50.5137 20.7503 50.5137 21.5967V33.9405C50.6694 33.9794 50.8323 34 51 34C52.1046 34 53 33.1046 53 32V13.1743C52.779 12.9037 52.5455 12.65 52.2994 12.4134C52.3671 12.466 52.4357 12.5205 52.5052 12.577L52.4167 12.4853L52.343 12.4202L52.1841 12.3047C52.2228 12.3405 52.2612 12.3768 52.2994 12.4134C49.9809 10.6167 48.6192 11.1557 46.5 13.9999C44.4671 10.7475 43.1399 10.3355 40 12.5L40.0703 12.3874L39.9253 12.4816L39.9253 12.4799L39.8941 12.5126L39.8691 12.5391ZM55 13.5998V33C55 34.1046 54.1046 35 53 35H57.4473V19.0576C58.0332 17.9346 58.8389 17.0312 59.8643 16.3477C60.9059 15.6478 62.0046 15.2979 63.1602 15.2979C64.7552 15.2979 65.9678 15.957 66.7979 17.2754C67.6442 18.5775 68.0674 20.1888 68.0674 22.1094V35H74.9521V20.5469C74.9521 17.6571 74.1206 15.2717 72.4574 13.3908L71.9934 12.9803L72 13C71.9746 12.9727 71.9493 12.9457 71.9241 12.9189L70.7539 11.8836C70.6304 11.8 70.5042 11.7191 70.3754 11.6409L69.8016 11.3422C68.4206 10.8757 67.0624 11.6937 65 14C63.5309 10.8659 61.3943 10.7033 55.4277 13.3113L55 13.5998ZM20.0449 32.8516V35H26.9053V10.3906H20.0449V26.6992C19.2962 27.8223 18.4173 28.6768 17.4082 29.2627C16.3991 29.8486 15.333 30.1416 14.21 30.1416C12.5335 30.1416 11.2314 29.515 10.3037 28.2617C9.37598 27.0085 8.91211 25.4378 8.91211 23.5498V10.3906H2.05176V23.5498C2.05176 25.7796 2.52376 27.7897 3.46777 29.5801C4.42806 31.3542 5.83594 32.7783 7.69141 33.8525C9.56315 34.9105 11.736 35.4395 14.21 35.4395C15.2028 35.4395 16.2119 35.2116 17.2373 34.7559C18.279 34.3001 19.2148 33.6654 20.0449 32.8516ZM118.775 12.5391V10.3906H111.915V35H118.775V18.6426C119.54 17.5846 120.436 16.7627 121.461 16.1768C122.503 15.5908 123.569 15.2979 124.659 15.2979C125.847 15.2979 126.962 15.3792 128.004 15.542V10.1953C126.962 10.0326 125.864 9.95117 124.708 9.95117C123.699 9.95117 122.665 10.1872 121.607 10.6592C120.549 11.1149 119.605 11.7415 118.775 12.5391ZM156.3 23.8428H137.184C137.281 25.5843 138.046 27.0573 139.479 28.2617C140.911 29.4499 142.799 30.0439 145.143 30.0439C148.658 30.0439 151.905 29.043 154.884 27.041V32.1924C153.94 33.1038 152.524 33.8607 150.636 34.4629C148.764 35.0488 146.803 35.3418 144.752 35.3418C142.099 35.3418 139.69 34.7884 137.525 33.6816C135.361 32.5586 133.652 31.0042 132.398 29.0186C131.161 27.0329 130.543 24.8112 130.543 22.3535C130.576 18.8379 131.853 15.8919 134.376 13.5156C136.915 11.1393 140.056 9.95117 143.8 9.95117C145.606 9.95117 147.34 10.3581 149 11.1719C150.66 11.9694 152.052 13.0192 153.175 14.3213C154.314 15.6071 155.177 17.0964 155.763 18.7891C156.349 20.4818 156.528 22.1663 156.3 23.8428ZM137.501 19.3994H149.83C149.765 18.2438 149.146 17.2754 147.975 16.4941C146.803 15.6966 145.411 15.2979 143.8 15.2979C142.091 15.2979 140.634 15.6885 139.43 16.4697C138.242 17.2347 137.599 18.2113 137.501 19.3994ZM161.964 35H168.824V1.74805H161.964V35ZM182.252 35H175.392V1.74805H182.252V35ZM203.565 32.8516V35H210.523C210.523 33.4049 210.515 31.0205 210.499 27.8467C210.483 24.6729 210.475 22.2884 210.475 20.6934C210.475 13.5319 205.974 9.95117 196.974 9.95117C195.688 9.95117 194.329 10.1221 192.896 10.4639C191.48 10.7894 190.203 11.2695 189.063 11.9043V17.4951C190.87 16.193 193.344 15.4443 196.485 15.249C198.748 15.249 200.424 15.5827 201.515 16.25C202.621 16.9173 203.272 18.0648 203.468 19.6924H194.972C192.791 19.6924 190.927 20.376 189.381 21.7432C187.835 23.1104 187.062 24.86 187.062 26.9922C187.062 28.1641 187.273 29.2383 187.696 30.2148C188.119 31.1751 188.681 31.9727 189.381 32.6074C190.081 33.2422 190.886 33.7793 191.798 34.2188C192.709 34.6582 193.637 34.9674 194.581 35.1465C195.541 35.3418 196.502 35.4395 197.462 35.4395C199.757 35.4395 201.791 34.5768 203.565 32.8516ZM197.828 24.3555H203.565V27.1387C202.166 29.1081 200.416 30.0928 198.316 30.0928C197.063 30.0928 195.956 29.8486 194.996 29.3604C194.052 28.8721 193.58 28.1152 193.58 27.0898C193.58 26.2435 193.979 25.5762 194.776 25.0879C195.574 24.5996 196.591 24.3555 197.828 24.3555Z'
      fill='black'
    />
  </svg>
);

export default Logo;
