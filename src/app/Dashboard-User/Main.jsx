// import React from 'react';
// import { Search, Settings, Bell } from 'lucide-react';
// import { Pie } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const Dashboard = () => {
//   const pieData = {
//     labels: ['Total Borrowed Books', 'Total Returned Books'],
//     datasets: [{
//       data: [60, 40],
//       backgroundColor: ['#4361EE', '#A78BFA'],
//       borderWidth: 0,
//     }],
//   };

//   const pieOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//   };

//   return (
//     <div
//     className="flex min-h-screen"
//     style={{
//       background: 'linear-gradient(166.92deg, #AD6AFF 9.43%, #FFFFFF 58.22%)',
//     }}
//   >
  
//       {/* Sidebar */}
//       <div
//   className="w-64 p-6"
//   style={{
//     background: 'linear-gradient(111.84deg, #3B156D 59.3%, rgba(26, 31, 55, 0) 100%)',
//   }}
// >

//         <h1 className="text-xl font-semibold text-white mb-12">LIBRARY NAME</h1>
        
//         {/* Main Navigation */}
//         <div className="space-y-2 mb-12">
//           <h2 className="text-gray-400 text-sm mb-4">MAIN MENU</h2>
//           <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-purple-700/50 text-white">
//           <span><svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g filter="url(#filter0_d_0_1)">
// <rect x="6.72339" y="2.43091" width="35.3407" height="35.3407" rx="14.1363" fill="#1A1F37"/>
// </g>
// <path d="M24.5856 14.7619C24.5343 14.7127 24.4659 14.6853 24.3948 14.6853C24.3237 14.6853 24.2553 14.7127 24.2039 14.7619L17.8502 20.8316C17.8232 20.8574 17.8017 20.8884 17.7871 20.9228C17.7724 20.9571 17.7649 20.9941 17.765 21.0314L17.7639 26.728C17.7639 27.0209 17.8803 27.3018 18.0874 27.509C18.2945 27.7161 18.5754 27.8324 18.8683 27.8324H22.185C22.3314 27.8324 22.4719 27.7742 22.5754 27.6707C22.679 27.5671 22.7372 27.4267 22.7372 27.2802V22.5865C22.7372 22.5133 22.7662 22.4431 22.818 22.3913C22.8698 22.3395 22.94 22.3104 23.0133 22.3104H25.7742C25.8475 22.3104 25.9177 22.3395 25.9695 22.3913C26.0213 22.4431 26.0503 22.5133 26.0503 22.5865V27.2802C26.0503 27.4267 26.1085 27.5671 26.2121 27.6707C26.3156 27.7742 26.4561 27.8324 26.6025 27.8324H29.9178C30.2107 27.8324 30.4916 27.7161 30.6987 27.509C30.9058 27.3018 31.0222 27.0209 31.0222 26.728V21.0314C31.0222 20.9941 31.0147 20.9571 31.0001 20.9228C30.9854 20.8884 30.9639 20.8574 30.937 20.8316L24.5856 14.7619Z" fill="#0075FF"/>
// <path d="M32.5016 19.6934L29.9201 17.2237V13.476C29.9201 13.3295 29.8619 13.1891 29.7584 13.0855C29.6548 12.982 29.5144 12.9238 29.3679 12.9238H27.7113C27.5649 12.9238 27.4244 12.982 27.3208 13.0855C27.2173 13.1891 27.1591 13.3295 27.1591 13.476V14.5804L25.1601 12.6691C24.9731 12.48 24.6949 12.3716 24.3943 12.3716C24.0947 12.3716 23.8173 12.48 23.6302 12.6694L16.2894 19.6927C16.0748 19.8998 16.0478 20.2404 16.2432 20.4647C16.2922 20.5214 16.3523 20.5674 16.4197 20.6001C16.4871 20.6328 16.5605 20.6514 16.6353 20.6548C16.7102 20.6582 16.7849 20.6464 16.855 20.62C16.9251 20.5936 16.9892 20.5532 17.0432 20.5013L24.2045 13.6582C24.2559 13.6091 24.3242 13.5816 24.3954 13.5816C24.4665 13.5816 24.5348 13.6091 24.5862 13.6582L31.7482 20.5013C31.8537 20.6025 31.995 20.6577 32.1412 20.6549C32.2873 20.652 32.4264 20.5913 32.5279 20.4861C32.7398 20.2666 32.7222 19.9043 32.5016 19.6934Z" fill="#0075FF"/>
// <defs>
// <filter id="filter0_d_0_1" x="0.244257" y="0.0748601" width="48.2991" height="48.2991" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4.12308"/>
// <feGaussianBlur stdDeviation="3.23957"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
// <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
// <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
// </filter>
// </defs>
// </svg>

// </span>
//           <span  className="material-icons">Dashboard</span>
//           </a>
//           <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-purple-700/30">
//           <span> <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g filter="url(#filter0_d_0_1)">
// <rect x="6.72339" y="3.04419" width="35.3407" height="35.3407" rx="14.1363" fill="#1A1F37"/>
// </g>
// <path d="M19.1478 28.998H18.0434C17.8237 28.998 17.613 28.9107 17.4577 28.7554C17.3024 28.6 17.2151 28.3893 17.2151 28.1697V23.1999C17.2151 22.9802 17.3024 22.7695 17.4577 22.6142C17.613 22.4588 17.8237 22.3716 18.0434 22.3716H19.1478C19.3675 22.3716 19.5781 22.4588 19.7335 22.6142C19.8888 22.7695 19.9761 22.9802 19.9761 23.1999V28.1697C19.9761 28.3893 19.8888 28.6 19.7335 28.7554C19.5781 28.9107 19.3675 28.998 19.1478 28.998V28.998Z" fill="#0075FF"/>
// <path d="M26.8787 28.9969H25.7743C25.5547 28.9969 25.344 28.9097 25.1886 28.7543C25.0333 28.599 24.946 28.3883 24.946 28.1686V19.8857C24.946 19.666 25.0333 19.4553 25.1886 19.3C25.344 19.1446 25.5547 19.0574 25.7743 19.0574H26.8787C27.0984 19.0574 27.3091 19.1446 27.4644 19.3C27.6198 19.4553 27.707 19.666 27.707 19.8857V28.1686C27.707 28.3883 27.6198 28.599 27.4644 28.7543C27.3091 28.9097 27.0984 28.9969 26.8787 28.9969V28.9969Z" fill="#0075FF"/>
// <path d="M30.744 28.9973H29.6396C29.4199 28.9973 29.2092 28.9101 29.0539 28.7547C28.8985 28.5994 28.8113 28.3887 28.8113 28.169V16.0207C28.8113 15.801 28.8985 15.5903 29.0539 15.435C29.2092 15.2796 29.4199 15.1924 29.6396 15.1924H30.744C30.9637 15.1924 31.1743 15.2796 31.3297 15.435C31.485 15.5903 31.5723 15.801 31.5723 16.0207V28.169C31.5723 28.3887 31.485 28.5994 31.3297 28.7547C31.1743 28.9101 30.9637 28.9973 30.744 28.9973V28.9973Z" fill="#0075FF"/>
// <path d="M23.0133 28.9974H21.9089C21.6892 28.9974 21.4785 28.9101 21.3232 28.7547C21.1678 28.5994 21.0806 28.3887 21.0806 28.1691V13.2597C21.0806 13.04 21.1678 12.8293 21.3232 12.674C21.4785 12.5187 21.6892 12.4314 21.9089 12.4314H23.0133C23.2329 12.4314 23.4436 12.5187 23.599 12.674C23.7543 12.8293 23.8416 13.04 23.8416 13.2597V28.1691C23.8416 28.3887 23.7543 28.5994 23.599 28.7547C23.4436 28.9101 23.2329 28.9974 23.0133 28.9974V28.9974Z" fill="#0075FF"/>
// <defs>
// <filter id="filter0_d_0_1" x="0.244257" y="0.688141" width="48.2991" height="48.2991" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4.12308"/>
// <feGaussianBlur stdDeviation="3.23957"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
// <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
// <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
// </filter>
// </defs>
// </svg>

// </span>
//             <span className="material-icons">Books</span>
//           </a>
//           <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-purple-700/30">
//           <span> <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect x="0.723389" y="0.657471" width="35.3407" height="35.3407" rx="14.1363" fill="#0075FF"/>
// <path d="M10.6631 22.469C10.6631 22.9815 10.8667 23.4731 11.2292 23.8356C11.5916 24.198 12.0832 24.4017 12.5958 24.4017H24.1919C24.7045 24.4017 25.1961 24.198 25.5586 23.8356C25.921 23.4731 26.1246 22.9815 26.1246 22.469V17.1541H10.6631V22.469ZM12.9409 19.846C12.9409 19.5714 13.05 19.3081 13.2442 19.1139C13.4383 18.9197 13.7017 18.8106 13.9763 18.8106H15.6329C15.9075 18.8106 16.1708 18.9197 16.365 19.1139C16.5592 19.3081 16.6682 19.5714 16.6682 19.846V20.5363C16.6682 20.8109 16.5592 21.0742 16.365 21.2684C16.1708 21.4626 15.9075 21.5716 15.6329 21.5716H13.9763C13.7017 21.5716 13.4383 21.4626 13.2442 21.2684C13.05 21.0742 12.9409 20.8109 12.9409 20.5363V19.846Z" fill="white"/>
// <path d="M24.1919 12.2527H12.5958C12.0832 12.2527 11.5916 12.4563 11.2292 12.8188C10.8667 13.1812 10.6631 13.6728 10.6631 14.1854V15.0827H26.1246V14.1854C26.1246 13.6728 25.921 13.1812 25.5586 12.8188C25.1961 12.4563 24.7045 12.2527 24.1919 12.2527Z" fill="white"/>
// </svg>
// </span>
  
//             <span className="material-icons text-blue-400">Billing</span>
//           </a>
          
//           <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-purple-700/30">
//           <span><svg width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g filter="url(#filter0_d_0_1)">
// <rect x="6.72339" y="3.271" width="35.3407" height="35.3407" rx="14.1363" fill="#1A1F37"/>
// </g>
// <path d="M31.7642 16.266C31.7244 16.1887 31.667 16.1218 31.5965 16.0709C31.526 16.02 31.4445 15.9864 31.3586 15.973C31.2727 15.9595 31.1848 15.9665 31.1021 15.9935C31.0194 16.0204 30.9443 16.0665 30.8828 16.1279L28.7623 18.2498C28.6582 18.3523 28.5179 18.4099 28.3718 18.4099C28.2257 18.4099 28.0854 18.3523 27.9813 18.2498L27.0646 17.3317C27.0134 17.2805 26.9727 17.2196 26.9449 17.1526C26.9172 17.0856 26.9029 17.0138 26.9029 16.9412C26.9029 16.8687 26.9172 16.7969 26.9449 16.7299C26.9727 16.6629 27.0134 16.602 27.0646 16.5507L29.1761 14.4389C29.2394 14.3756 29.2864 14.2979 29.313 14.2124C29.3395 14.1269 29.345 14.0363 29.3287 13.9483C29.3125 13.8602 29.2751 13.7775 29.2198 13.7071C29.1645 13.6368 29.0929 13.5809 29.0111 13.5443C27.4163 12.8313 25.4257 13.2034 24.1704 14.4493C23.104 15.5081 22.7861 17.1626 23.299 18.9887C23.3267 19.0861 23.3268 19.1892 23.2995 19.2866C23.2721 19.3841 23.2183 19.4721 23.144 19.5409L17.3984 24.7885C17.1746 24.9895 16.994 25.2339 16.8678 25.507C16.7416 25.78 16.6723 26.0759 16.6641 26.3766C16.656 26.6773 16.7092 26.9765 16.8206 27.256C16.9319 27.5354 17.099 27.7893 17.3116 28.002C17.5243 28.2148 17.7781 28.382 18.0575 28.4934C18.3369 28.6049 18.6361 28.6583 18.9368 28.6503C19.2375 28.6423 19.5334 28.5731 19.8065 28.447C20.0796 28.3209 20.3242 28.1404 20.5252 27.9167L25.8291 22.1583C25.8969 22.085 25.9834 22.0315 26.0793 22.0037C26.1752 21.976 26.2769 21.9749 26.3734 22.0006C26.8932 22.143 27.4295 22.2169 27.9685 22.2204C29.1212 22.2204 30.1328 21.8473 30.8624 21.1284C32.2136 19.7973 32.4196 17.5395 31.7642 16.266ZM18.9925 27.5388C18.7652 27.5636 18.5358 27.5172 18.336 27.4061C18.1362 27.295 17.9758 27.1246 17.8769 26.9184C17.778 26.7123 17.7456 26.4805 17.7841 26.2551C17.8225 26.0297 17.93 25.8218 18.0916 25.6601C18.2533 25.4984 18.4612 25.3909 18.6865 25.3523C18.9119 25.3138 19.1437 25.3461 19.3499 25.4449C19.5561 25.5437 19.7266 25.7041 19.8377 25.9039C19.9489 26.1037 19.9954 26.333 19.9706 26.5604C19.9434 26.8105 19.8316 27.0438 19.6538 27.2217C19.4759 27.3996 19.2426 27.5115 18.9925 27.5388Z" fill="#0075FF"/>
// <defs>
// <filter id="filter0_d_0_1" x="0.244257" y="0.914948" width="48.2991" height="48.2991" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4.12308"/>
// <feGaussianBlur stdDeviation="3.23957"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
// <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
// <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
// </filter>
// </defs>
// </svg>

// </span>
//             <span className="material-icons"> Catalog</span>
//           </a>
//         </div>

//         {/* Account Pages */}
//         <div className="space-y-2">
//           <h2 className="text-gray-400 text-sm mb-4">ACCOUNT PAGES</h2>
//           <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-purple-700/30">
//             <span className="material-icons"><svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g filter="url(#filter0_d_0_1)">
// <rect x="6.90137" y="2.95752" width="35.3407" height="35.3407" rx="14.1363" fill="#1A1F37"/>
// </g>
// <path d="M27.2168 14.0209C26.5452 13.2958 25.6071 12.8965 24.5717 12.8965C23.5309 12.8965 22.5897 13.2934 21.9212 14.014C21.2454 14.7426 20.9162 15.7327 20.9935 16.8019C21.1467 18.9113 22.7519 20.6273 24.5717 20.6273C26.3916 20.6273 27.994 18.9117 28.1496 16.8026C28.228 15.7431 27.8967 14.755 27.2168 14.0209Z" fill="#0075FF"/>
// <path d="M30.6458 28.3573H18.4974C18.3384 28.3594 18.1809 28.326 18.0365 28.2596C17.892 28.1931 17.7641 28.0953 17.6622 27.9732C17.4379 27.7051 17.3475 27.3389 17.4144 26.9686C17.7057 25.3527 18.6148 23.9953 20.0436 23.0424C21.3129 22.1965 22.9209 21.731 24.5716 21.731C26.2223 21.731 27.8303 22.1969 29.0996 23.0424C30.5284 23.995 31.4375 25.3523 31.7288 26.9682C31.7957 27.3385 31.7053 27.7047 31.481 27.9729C31.3791 28.095 31.2513 28.1929 31.1068 28.2594C30.9623 28.3259 30.8048 28.3594 30.6458 28.3573Z" fill="#0075FF"/>
// <defs>
// <filter id="filter0_d_0_1" x="0.422235" y="0.601471" width="48.2991" height="48.2991" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4.12308"/>
// <feGaussianBlur stdDeviation="3.23957"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
// <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
// <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
// </filter>
// </defs>
// </svg>
// </span>
//             <span>Profile</span>
//           </a>
//           <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-purple-700/30">
//             <span className="material-icons"><svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g filter="url(#filter0_d_0_1)">
// <rect x="6.90137" y="2.5708" width="35.3407" height="35.3407" rx="14.1363" fill="#1A1F37"/>
// </g>
// <path d="M30.5079 19.1366H25.6761C25.2368 19.1366 24.8154 18.9621 24.5048 18.6514C24.1941 18.3408 24.0195 17.9194 24.0195 17.48V12.6483C24.0195 12.6117 24.005 12.5766 23.9791 12.5507C23.9532 12.5248 23.9181 12.5103 23.8815 12.5103H20.7064C20.1205 12.5103 19.5587 12.743 19.1445 13.1572C18.7303 13.5714 18.4976 14.1332 18.4976 14.719V25.763C18.4976 26.3488 18.7303 26.9106 19.1445 27.3249C19.5587 27.7391 20.1205 27.9718 20.7064 27.9718H28.4371C29.0229 27.9718 29.5848 27.7391 29.999 27.3249C30.4132 26.9106 30.6459 26.3488 30.6459 25.763V19.2747C30.6459 19.2381 30.6314 19.203 30.6055 19.1771C30.5796 19.1512 30.5445 19.1366 30.5079 19.1366Z" fill="#0075FF"/>
// <path d="M30.2049 17.9154L25.2417 12.9522C25.2321 12.9426 25.2198 12.9361 25.2064 12.9334C25.1931 12.9308 25.1792 12.9322 25.1667 12.9374C25.1541 12.9426 25.1433 12.9514 25.1357 12.9627C25.1282 12.974 25.1241 12.9873 25.124 13.0009V17.4809C25.124 17.6274 25.1822 17.7678 25.2858 17.8714C25.3893 17.9749 25.5298 18.0331 25.6762 18.0331H30.1563C30.1699 18.0331 30.1832 18.029 30.1945 18.0214C30.2058 18.0138 30.2146 18.003 30.2198 17.9905C30.225 17.9779 30.2263 17.9641 30.2237 17.9507C30.2211 17.9374 30.2145 17.9251 30.2049 17.9154Z" fill="#0075FF"/>
// <defs>
// <filter id="filter0_d_0_1" x="0.422235" y="0.214753" width="48.2991" height="48.2991" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4.12308"/>
// <feGaussianBlur stdDeviation="3.23957"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
// <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
// <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
// </filter>
// </defs>
// </svg>

// </span>
//             <span>Sign In</span>
//           </a>
//           <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-purple-700/30">
//             <span className="material-icons"><svg width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g filter="url(#filter0_d_0_1)">
// <rect x="6.90137" y="3.18408" width="35.3407" height="35.3407" rx="14.1363" fill="#1A1F37"/>
// </g>
// <path d="M32.2211 13.3402C32.2148 13.3097 32.1999 13.2816 32.1782 13.2592C32.1565 13.2369 32.1289 13.2211 32.0985 13.2139C30.0771 12.7197 25.4066 14.4809 22.8761 17.0103C22.4248 17.458 22.0134 17.9441 21.6465 18.4632C20.8661 18.3942 20.0858 18.4519 19.4207 18.7418C17.5443 19.5676 16.998 21.7226 16.8458 22.6496C16.8371 22.7003 16.8404 22.7524 16.8553 22.8017C16.8702 22.8509 16.8963 22.8961 16.9316 22.9335C16.9669 22.971 17.0104 22.9998 17.0587 23.0176C17.107 23.0354 17.1587 23.0417 17.2099 23.0361L20.2232 22.7038C20.2253 22.931 20.239 23.1579 20.2642 23.3837C20.2794 23.5405 20.349 23.687 20.461 23.7978L21.6278 24.9619C21.7387 25.0737 21.8852 25.1433 22.042 25.1587C22.2665 25.1838 22.4921 25.1975 22.7181 25.1997L22.3874 28.2092C22.3819 28.2603 22.3883 28.3121 22.4062 28.3603C22.424 28.4086 22.4528 28.4521 22.4902 28.4873C22.5276 28.5226 22.5728 28.5487 22.622 28.5636C22.6712 28.5786 22.7232 28.5819 22.774 28.5733C23.6993 28.4249 25.858 27.8786 26.6791 26.0021C26.969 25.3371 27.0283 24.5605 26.9614 23.784C27.4818 23.4171 27.9692 23.0055 28.4181 22.554C30.9565 20.0284 32.7077 15.462 32.2211 13.3402ZM25.8856 19.5411C25.6538 19.3094 25.4959 19.0143 25.4319 18.6929C25.3679 18.3715 25.4007 18.0384 25.526 17.7356C25.6514 17.4328 25.8637 17.174 26.1361 16.992C26.4086 16.8099 26.7289 16.7127 27.0566 16.7127C27.3843 16.7127 27.7046 16.8099 27.9771 16.992C28.2495 17.174 28.4619 17.4328 28.5872 17.7356C28.7126 18.0384 28.7453 18.3715 28.6813 18.6929C28.6173 19.0143 28.4594 19.3094 28.2276 19.5411C28.0739 19.695 27.8914 19.8171 27.6905 19.9004C27.4895 19.9837 27.2741 20.0266 27.0566 20.0266C26.8391 20.0266 26.6237 19.9837 26.4228 19.9004C26.2218 19.8171 26.0393 19.695 25.8856 19.5411Z" fill="#0075FF"/>
// <path d="M21.5484 25.8051C21.3592 25.9946 21.0559 26.0684 20.6907 26.1316C19.8704 26.2714 19.146 25.5625 19.2933 24.7331C19.3496 24.4187 19.5159 23.978 19.6195 23.8745C19.6421 23.8523 19.6572 23.8235 19.6625 23.7923C19.6679 23.761 19.6632 23.7289 19.6493 23.7004C19.6354 23.672 19.6128 23.6486 19.5848 23.6337C19.5569 23.6188 19.5249 23.6131 19.4935 23.6173C19.0347 23.6735 18.6079 23.8815 18.2811 24.2082C17.4697 25.0203 17.3931 28.0336 17.3931 28.0336C17.3931 28.0336 20.4081 27.9569 21.2195 27.1449C21.5472 26.8182 21.7555 26.3908 21.8107 25.9314C21.8234 25.7871 21.6478 25.7012 21.5484 25.8051Z" fill="#0075FF"/>
// <defs>
// <filter id="filter0_d_0_1" x="0.422235" y="0.828034" width="48.2991" height="48.2991" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4.12308"/>
// <feGaussianBlur stdDeviation="3.23957"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
// <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
// <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
// </filter>
// </defs>
// </svg>
// </span>
//             <span>Sign Up</span>
//           </a>
//         </div>

//        {/* Help Card */}
// <div
//   className="mt-12 p-4 rounded-xl bg-cover bg-center"
//   style={{
//     backgroundImage: "url('/help.jpeg')",
//   }}
// >
//   <span>
//     <svg
//       width="42"
//       height="42"
//       viewBox="0 0 42 42"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect
//         x="0.48999"
//         y="0.327148"
//         width="41.2308"
//         height="41.2308"
//         rx="14.1363"
//         fill="white"
//       />
//       <path
//         d="M21.1054 10.3403C15.2521 10.3403 10.5032 15.0892 10.5032 20.9425C10.5032 26.7958 15.2521 31.5448 21.1054 31.5448C26.9587 31.5448 31.7076 26.7958 31.7076 20.9425C31.7076 15.0892 26.9587 10.3403 21.1054 10.3403ZM20.7741 27.1272C20.5556 27.1272 20.3421 27.0624 20.1605 26.941C19.9789 26.8197 19.8373 26.6472 19.7537 26.4454C19.6701 26.2436 19.6483 26.0215 19.6909 25.8073C19.7335 25.5931 19.8387 25.3963 19.9931 25.2418C20.1476 25.0874 20.3444 24.9822 20.5586 24.9396C20.7728 24.897 20.9949 24.9189 21.1967 25.0024C21.3985 25.086 21.571 25.2276 21.6923 25.4092C21.8137 25.5908 21.8785 25.8043 21.8785 26.0228C21.8785 26.3157 21.7621 26.5966 21.555 26.8037C21.3479 27.0108 21.067 27.1272 20.7741 27.1272V27.1272ZM22.6206 21.4947C21.7255 22.0955 21.6024 22.6461 21.6024 23.1513C21.6024 23.3564 21.5209 23.553 21.3759 23.698C21.231 23.843 21.0343 23.9244 20.8293 23.9244C20.6243 23.9244 20.4276 23.843 20.2826 23.698C20.1377 23.553 20.0562 23.3564 20.0562 23.1513C20.0562 21.9415 20.6128 20.9795 21.7581 20.2103C22.8227 19.4958 23.4246 19.043 23.4246 18.0474C23.4246 17.3704 23.0381 16.8563 22.2379 16.4758C22.0496 16.3864 21.6305 16.2991 21.1148 16.3052C20.4676 16.3135 19.9651 16.4681 19.578 16.7795C18.848 17.3671 18.7862 18.0065 18.7862 18.0159C18.7813 18.1174 18.7564 18.217 18.713 18.3089C18.6697 18.4008 18.6086 18.4833 18.5334 18.5516C18.4581 18.6199 18.3701 18.6728 18.2745 18.7071C18.1788 18.7414 18.0773 18.7566 17.9758 18.7517C17.8743 18.7468 17.7747 18.722 17.6828 18.6786C17.5909 18.6352 17.5084 18.5742 17.4401 18.4989C17.3717 18.4237 17.3189 18.3357 17.2846 18.24C17.2503 18.1444 17.2351 18.0429 17.24 17.9413C17.2461 17.8072 17.3394 16.5984 18.6078 15.5779C19.2655 15.0489 20.102 14.7739 21.0927 14.7618C21.794 14.7535 22.4527 14.8722 22.8995 15.0832C24.2364 15.7154 24.9708 16.7696 24.9708 18.0474C24.9708 19.9155 23.7223 20.7542 22.6206 21.4947Z"
//         fill="#0075FF"
//       />
//     </svg>
//   </span>
//   <h3 className="text-white font-semibold mb-1">Need help?</h3>
//   <p className="text-blue-200 text-sm mb-2">Please check our docs</p>
//   <button
//     className="w-full text-white rounded-lg py-2 text-sm font-medium"
//     style={{
//       background: 'linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)',
//     }}
//   >
//     DOCUMENTATION
//   </button>
// </div>

//       </div>

//       {/* Main Content */}
     
//       <div className="flex-1 p-6">
//       <header className="flex justify-between items-center mb-6">
//   <div className="text-left text-800 text-5xl">Dashboard</div>
//   <div className="flex items-center space-x-4">
//     <div className="relative">
//       <input
//          type="text"
//          placeholder="Type here..."
//          className="pl-10 pr-4 py-1.5 rounded-full bg-[#0F1535] text-gray-400 placeholder-gray-400 w-64 text-sm focus:outline-none"
//        />
//       <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//     </div>
//     <button className="text-gray-600 text-sm">
//       Sign In
//     </button>
//     <button className="p-2">
//       <Settings className="w-5 h-5 text-gray-600" />
//     </button>
//     <button className="p-2">
//       <Bell className="w-5 h-5 text-gray-600" />
//     </button>
//   </div>
// </header>



//   <div className="grid grid-cols-3 gap-2 mb-2 w-full">

//   {/* Borrowed Books */}
//   <div
//   className="text-white p-2 rounded-lg w-full"
//   style={{
//     background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
//   }}
// >
//   <div className="flex justify-between items-center mb-2">
//     <h2 className="text-xs font-bold">YOUR BORROWED BOOKS LIST</h2>
//     <button className="bg-blue-500 text-white px-2 py-1 text-xs rounded-md hover:bg-blue-600">
//       VIEW ALL
//     </button>
//   </div>

//   {/* Column Headings */}
//   <div className="text-xs font-sm text-gray-400 text-right">ISSUED</div>

//   <div className="space-y-1">
//     {[
//       { name: 'Esthera Jackson', email: 'esthera@simmmp.com', issuedDate: '14/06/21', image: '/1.png' },
//       { name: 'Alexa Liras', email: 'alexa@simmmp.com', issuedDate: '14/06/21', image: '2.png' },
//       { name: 'Laurent Michael', email: 'laurent@simmmp.com', issuedDate: '14/06/21', image: '3.png' },
//       { name: 'Esthera Jackson', email: 'esthera@simmmp.com', issuedDate: '14/06/21', image: '/1.png' },
//       { name: 'Alexa Liras', email: 'alexa@simmmp.com', issuedDate: '14/06/21', image: '2.png' },
//       { name: 'Laurent Michael', email: 'laurent@simmmp.com', issuedDate: '14/06/21', image: '3.png' },
//         ].map((book, index) => (
//       <div
//         key={index}
//         className="flex items-center justify-between p-2 rounded-md"
//         style={{
//           background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
//         }}
//       >
//         <div className="flex items-center">
//           <img
//             src={book.image}
//             alt={book.name}
//             className="w-8 h-12 object-cover mr-2"
//           />
//           <div>
//             <p className="font-medium text-xs">{book.name}</p>
//             <p className="text-[10px] text-gray-300">{book.email}</p>
//           </div>
//         </div>
//         <div className="text-[10px] flex items-center gap-1">
//           <p>{book.issuedDate}</p>
//           <button className="text-gray-400 hover:underline">Edit</button>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>


//   {/* Returned Books */}
//   <div
//   className="text-white p-2 rounded-lg w-full"
//   style={{
//     background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
//   }}
// >

//     <div className="flex justify-between items-center mb-2">
//       <h2 className="text-xs font-bold">YOUR RETURNED BOOK LIST</h2>
//       <button className="bg-blue-500 text-white px-2 py-1 text-xs rounded-md hover:bg-blue-600">
//         VIEW ALL
//       </button>
//     </div>
    
//       {/* Column Headings */}
//       <div className="flex justify-between items-center mb-2">
//     <div className="text-xs font-sm  text-gray-400 ">BOOKS</div>
//     <div className="text-xs font-sm  text-gray-400 text-right  pr-2">ISSUED</div>
//   </div>

//   <div className="space-y-1">
//     {[
//       { name: 'Esthera Jackson', email: 'esthera@simmmp.com', issuedDate: '14/06/21', image: '/1.png' },
//       { name: 'Alexa Liras', email: 'alexa@simmmp.com', issuedDate: '14/06/21', image: '2.png' },
//       { name: 'Laurent Michael', email: 'laurent@simmmp.com', issuedDate: '14/06/21', image: '3.png' },
//       { name: 'Esthera Jackson', email: 'esthera@simmmp.com', issuedDate: '14/06/21', image: '/1.png' },
//       { name: 'Alexa Liras', email: 'alexa@simmmp.com', issuedDate: '14/06/21', image: '2.png' },
//       { name: 'Laurent Michael', email: 'laurent@simmmp.com', issuedDate: '14/06/21', image: '3.png' },
//         ].map((book, index) => (
//       <div
//         key={index}
//         className="flex items-center justify-between p-2 rounded-md"
//         style={{
//           background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
//         }}
//       >
//         <div className="flex items-center">
//           <img
//             src={book.image}
//             alt={book.name}
//             className="w-8 h-12 object-cover mr-2"
//           />
//           <div>
//             <p className="font-medium text-xs">{book.name}</p>
//             <p className="text-[10px] text-gray-300">{book.email}</p>
//           </div>
//         </div>
//         <div className="text-[10px] flex items-center gap-1">
//           <p>{book.issuedDate}</p>
//           <button className="text-gray-400 hover:underline">Edit</button>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>



//   {/* Available Books */}
//   <div
//   className="text-white p-2 rounded-lg w-full"
//   style={{
//     background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
//   }}
// >

//     <div className="flex justify-between items-center mb-2">
//       <h2 className="text-xs font-bold">Browse Available Book Inventory</h2>
//       <button className="bg-blue-500 text-white px-2 py-1 text-xs rounded-md hover:bg-blue-600">
//         VIEW ALL
//       </button>
//     </div>
//     <div className="flex justify-between items-center mb-2">
//     <div className="text-xs font-sm  text-gray-400 ">BOOKS</div>
//     <div className="text-xs font-sm  text-gray-400 text-right  pr-2">ISSUED</div>
//   </div>
//   <div className="space-y-1">
//     {[
//       { name: 'Esthera Jackson', email: 'esthera@simmmp.com', issuedDate: '14/06/21', image: '/1.png' },
//       { name: 'Alexa Liras', email: 'alexa@simmmp.com', issuedDate: '14/06/21', image: '2.png' },
//       { name: 'Laurent Michael', email: 'laurent@simmmp.com', issuedDate: '14/06/21', image: '3.png' },
//       { name: 'Esthera Jackson', email: 'esthera@simmmp.com', issuedDate: '14/06/21', image: '/1.png' },
//       { name: 'Alexa Liras', email: 'alexa@simmmp.com', issuedDate: '14/06/21', image: '2.png' },
//       { name: 'Laurent Michael', email: 'laurent@simmmp.com', issuedDate: '14/06/21', image: '3.png' },
//         ].map((book, index) => (
//       <div
//         key={index}
//         className="flex items-center justify-between p-2 rounded-md"
//         style={{
//           background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
//         }}
//       >
//         <div className="flex items-center">
//           <img
//             src={book.image}
//             alt={book.name}
//             className="w-8 h-12 object-cover mr-2"
//           />
//           <div>
//             <p className="font-medium text-xs">{book.name}</p>
//             <p className="text-[10px] text-gray-300">{book.email}</p>
//           </div>
//         </div>
//         <div className="text-[10px] flex items-center gap-1">
//           <p>{book.issuedDate}</p>
//           <button className="text-gray-400 hover:underline">Edit</button>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>

//   </div>
//   <div className="grid grid-cols-2 gap-6">
//   {/* Books Ratio */}
//   <div className="bg-gradient-to-br from-[#060B28F0] to-[#595a62] rounded-2xl p-6 shadow-lg">
//   <h2 className="font-semibold text-xl text-white text-center mb-6">BOOKS RATIO</h2>

//   <div className="grid grid-cols-2 gap-6 items-center">
// {/* Pie Chart */}
// <div className="relative flex justify-center items-center">
//   <div
//     className="w-48 h-48 rounded-full"
//     style={{
//       background: 'conic-gradient(#314BCE 0deg 216deg, #C2A2F5 216deg 360deg)',
//       transform: 'rotate(-215deg)', // Adjusts the rotation so the pie starts at the top
//     }}
//   >
   
//   </div>
// </div>



//     {/* Info Section */}
//     <div className="space-y-4">
//       {/* Total User Base */}
//       <div className="flex items-center bg-[#D2BFFF] p-4 rounded-xl shadow-md">
//         <div className="bg-[#4760FF] p-2 rounded-lg">
//         <svg width="48" height="58" viewBox="0 0 80 88" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect width="8" height="8" rx="12" fill="#4760FF"/>
// <path d="M40 44C44.8324 44 48.75 40.0825 48.75 35.25C48.75 30.4175 44.8324 26.5 40 26.5C35.1675 26.5 31.25 30.4175 31.25 35.25C31.25 40.0825 35.1675 44 40 44Z" fill="#26E2DB"/>
// <path d="M40.0003 48.375C31.2328 48.375 24.0928 54.255 24.0928 61.5C24.0928 61.99 24.4778 62.375 24.9678 62.375H55.0328C55.5228 62.375 55.9078 61.99 55.9078 61.5C55.9078 54.255 48.7678 48.375 40.0003 48.375Z" fill="#1DF9FD"/>
// </svg>

//         </div>
//         <div className="ml-3">
//           <p className="text-lg font-bold text-black">0150</p>
//           <p className="text-sm text-gray-700">Total User Base</p>
//         </div>
//       </div>

//       {/* Total Book Count */}
//       <div className="flex items-center bg-[#D2BFFF] p-4 rounded-xl shadow-md">
//         <div className="bg-[#F8D25B] p-2 rounded-lg">
//         <svg width="48" height="58" viewBox="0 0 80 88" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect width="80" height="88" rx="12" fill="#FFFF03" fill-opacity="0.48"/>
// <path d="M57.5 32.487V53.2945C57.5 54.992 56.1175 56.5495 54.42 56.7595L53.8775 56.8295C51.0075 57.2145 46.965 58.4045 43.71 59.7695C42.5725 60.242 41.3125 59.3845 41.3125 58.142V33.7995C41.3125 33.152 41.68 32.557 42.2575 32.242C45.46 30.5095 50.3075 28.9695 53.5975 28.6895H53.7025C55.8025 28.6895 57.5 30.387 57.5 32.487Z" fill="#12A23D"/>
// <path d="M37.7395 32.242C34.537 30.5095 29.6895 28.9695 26.3995 28.6895H26.277C24.177 28.6895 22.4795 30.387 22.4795 32.487V53.2945C22.4795 54.992 23.862 56.5495 25.5595 56.7595L26.102 56.8295C28.972 57.2145 33.0145 58.4045 36.2695 59.7695C37.407 60.242 38.667 59.3845 38.667 58.142V33.7995C38.667 33.1345 38.317 32.557 37.7395 32.242ZM27.747 37.5445H31.6845C32.402 37.5445 32.997 38.1395 32.997 38.857C32.997 39.592 32.402 40.1695 31.6845 40.1695H27.747C27.0295 40.1695 26.4345 39.592 26.4345 38.857C26.4345 38.1395 27.0295 37.5445 27.747 37.5445ZM32.997 45.4195H27.747C27.0295 45.4195 26.4345 44.842 26.4345 44.107C26.4345 43.3895 27.0295 42.7945 27.747 42.7945H32.997C33.7145 42.7945 34.3095 43.3895 34.3095 44.107C34.3095 44.842 33.7145 45.4195 32.997 45.4195Z" fill="#408826"/>
// </svg>

//         </div>
//         <div className="ml-3">
//           <p className="text-lg font-bold text-black">01500</p>
//           <p className="text-sm text-gray-700">Total Book Count</p>
//         </div>
//       </div>
  

//   {/* Borrowed & Returned Books Legend */}
//   <div className="mt-4 bg-[#F8D25B] p-3 rounded-xl">
//   <div className="flex flex-col gap-4">
    
//     <div className="flex items-center gap-2">
//       <div className="w-3 h-3 rounded-full bg-[#C2A2F5]"></div>
//       <span className="text-sm font-medium text-black">Total Borrowed Books</span>
//     </div>
//     <div className="flex items-center gap-2">
//       <div className="w-3 h-3 rounded-full bg-[#4760FF]"></div>
//       <span className="text-sm font-medium text-black">Total Returned Books</span>
//     </div>
//   </div>
// </div>

// </div>
// </div>
//   </div>
//   <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6 shadow-lg">
//   <div className="flex justify-between items-center mb-6">
//     <h2 className="font-semibold text-lg">Your Transactions</h2>
//     <div className="text-sm text-gray-400 flex items-center gap-2">
//       <span className="material-icons text-gray-400"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M13.2704 2.50635H2.22642C1.31151 2.50635 0.569824 3.24803 0.569824 4.16294V14.1025C0.569824 15.0174 1.31151 15.7591 2.22642 15.7591H13.2704C14.1853 15.7591 14.927 15.0174 14.927 14.1025V4.16294C14.927 3.24803 14.1853 2.50635 13.2704 2.50635Z" fill="white" stroke="#2D3748" stroke-width="0.883517" stroke-linejoin="round"/>
// <path d="M12.643 2.50635H2.85386C1.5945 2.50635 0.569824 3.5469 0.569824 4.82558V6.92394H1.12202C1.12202 6.37174 1.67422 5.81954 2.22642 5.81954H13.2704C13.8226 5.81954 14.3748 6.37174 14.3748 6.92394H14.927V4.82558C14.927 3.5469 13.9023 2.50635 12.643 2.50635Z" fill="#2D3748"/>
// <path d="M9.12859 8.58067C9.58605 8.58067 9.95689 8.20983 9.95689 7.75237C9.95689 7.29491 9.58605 6.92407 9.12859 6.92407C8.67113 6.92407 8.30029 7.29491 8.30029 7.75237C8.30029 8.20983 8.67113 8.58067 9.12859 8.58067Z" fill="#2D3748"/>
// <path d="M11.8898 8.58067C12.3473 8.58067 12.7181 8.20983 12.7181 7.75237C12.7181 7.29491 12.3473 6.92407 11.8898 6.92407C11.4324 6.92407 11.0615 7.29491 11.0615 7.75237C11.0615 8.20983 11.4324 8.58067 11.8898 8.58067Z" fill="#2D3748"/>
// <path d="M9.12859 11.3409C9.58605 11.3409 9.95689 10.9701 9.95689 10.5126C9.95689 10.0552 9.58605 9.68433 9.12859 9.68433C8.67113 9.68433 8.30029 10.0552 8.30029 10.5126C8.30029 10.9701 8.67113 11.3409 9.12859 11.3409Z" fill="#2D3748"/>
// <path d="M11.8898 11.3409C12.3473 11.3409 12.7181 10.9701 12.7181 10.5126C12.7181 10.0552 12.3473 9.68433 11.8898 9.68433C11.4324 9.68433 11.0615 10.0552 11.0615 10.5126C11.0615 10.9701 11.4324 11.3409 11.8898 11.3409Z" fill="#2D3748"/>
// <path d="M3.60662 11.3409C4.06407 11.3409 4.43492 10.9701 4.43492 10.5126C4.43492 10.0552 4.06407 9.68433 3.60662 9.68433C3.14916 9.68433 2.77832 10.0552 2.77832 10.5126C2.77832 10.9701 3.14916 11.3409 3.60662 11.3409Z" fill="#2D3748"/>
// <path d="M6.36785 11.3409C6.8253 11.3409 7.19615 10.9701 7.19615 10.5126C7.19615 10.0552 6.8253 9.68433 6.36785 9.68433C5.91039 9.68433 5.53955 10.0552 5.53955 10.5126C5.53955 10.9701 5.91039 11.3409 6.36785 11.3409Z" fill="#2D3748"/>
// <path d="M3.60662 14.1026C4.06407 14.1026 4.43492 13.7318 4.43492 13.2743C4.43492 12.8169 4.06407 12.446 3.60662 12.446C3.14916 12.446 2.77832 12.8169 2.77832 13.2743C2.77832 13.7318 3.14916 14.1026 3.60662 14.1026Z" fill="#2D3748"/>
// <path d="M6.36785 14.1026C6.8253 14.1026 7.19615 13.7318 7.19615 13.2743C7.19615 12.8169 6.8253 12.446 6.36785 12.446C5.91039 12.446 5.53955 12.8169 5.53955 13.2743C5.53955 13.7318 5.91039 14.1026 6.36785 14.1026Z" fill="#2D3748"/>
// <path d="M9.12859 14.1026C9.58605 14.1026 9.95689 13.7318 9.95689 13.2743C9.95689 12.8169 9.58605 12.446 9.12859 12.446C8.67113 12.446 8.30029 12.8169 8.30029 13.2743C8.30029 13.7318 8.67113 14.1026 9.12859 14.1026Z" fill="#2D3748"/>
// <path d="M3.33057 1.40186V2.50625" stroke="#2D3748" stroke-width="0.883517" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M12.166 1.40186V2.50625" stroke="#2D3748" stroke-width="0.883517" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
// </span>
//       23 - 30 March 2020
//     </div>
//   </div>

//   <div className="space-y-6">
//     <div>
//       <h3 className="text-gray-500 text-sm uppercase mb-2">Newest</h3>
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <span className="material-icons text-red-400 text-lg"><svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
// <circle cx="20.8991" cy="20.7682" r="20.0264" stroke="#E31A1A" stroke-width="1.17802"/>
// <path d="M24.8748 21.0996L20.8989 25.0754L16.9231 21.0996" 
//       stroke="#E31A1A" 
//       stroke-width="1.32528" 
//       stroke-linecap="round" 
//       stroke-linejoin="round" 
//       transform="translate(0, 2)" />

// <path d="M20.8987 24.5233L20.8987 16.4612" stroke="#E31A1A" stroke-width="1.32528" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
// </span>
//           <div>
//             <p className="font-medium">Netflix</p>
//             <p className="text-xs text-gray-500">27 March 2020, at 12:30 PM</p>
//           </div>
//         </div>
//         <span className="text-red-400 font-medium">-$2500</span>
//       </div>

//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <span className="material-icons text-green-400 text-lg"><svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
// <circle cx="20.8991" cy="20.6589" r="20.0264" stroke="#01B574" stroke-width="1.17802"/>
// <path d="M16.9233 20.3276L20.8992 16.3518L24.875 20.3276" 
//       stroke="#01B574" 
//       stroke-width="1.32528" 
//       stroke-linecap="round" 
//       stroke-linejoin="round" 
//       transform="translate(0, -2)" />

// <path d="M20.8994 16.904L20.8994 24.9661" stroke="#01B574" stroke-width="1.32528" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
// </span>
//           <div>
//             <p className="font-medium">Apple</p>
//             <p className="text-xs text-gray-500">27 March 2020, at 12:30 PM</p>
//           </div>
//         </div>
//         <span className="text-green-400 font-medium">+$2500</span>
//       </div>
//     </div>

//     <div>
//       <h3 className="text-gray-500 text-sm uppercase mb-2">Yesterday</h3>
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <span className="material-icons text-green-400 text-lg"><svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
// <circle cx="20.8991" cy="20.6589" r="20.0264" stroke="#01B574" stroke-width="1.17802"/>
// <path d="M16.9233 20.3276L20.8992 16.3518L24.875 20.3276" stroke="#01B574" stroke-width="1.32528" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M20.8994 16.904L20.8994 24.9661" stroke="#01B574" stroke-width="1.32528" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
// </span>
//           <div>
//             <p className="font-medium">Stripe</p>
//             <p className="text-xs text-gray-500">26 March 2020, at 13:45 PM</p>
//           </div>
//         </div>
//         <span className="text-green-400 font-medium">+$800</span>
//       </div>

//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <span className="material-icons text-green-400 text-lg"><svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
// <circle cx="20.8991" cy="20.6589" r="20.0264" stroke="#01B574" stroke-width="1.17802"/>
// <path d="M16.9233 20.3276L20.8992 16.3518L24.875 20.3276" stroke="#01B574" stroke-width="1.32528" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M20.8994 16.904L20.8994 24.9661" stroke="#01B574" stroke-width="1.32528" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
// </span>
//           <div>
//             <p className="font-medium">HubSpot</p>
//             <p className="text-xs text-gray-500">26 March 2020, at 12:30 PM</p>
//           </div>
//         </div>
//         <span className="text-green-400 font-medium">+$1700</span>
//       </div>

//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <span className="material-icons text-gray-400 text-lg"><svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
// <circle cx="20.8991" cy="21.4084" r="20.0264" stroke="#A0AEC0" stroke-width="1.17802"/>
// <g clip-path="url(#clip0_0_1)">
// <path d="M20.8993 27.5932C21.6583 27.5932 22.2736 26.9779 22.2736 26.2188C22.2736 25.4598 21.6583 24.8445 20.8993 24.8445C20.1402 24.8445 19.5249 25.4598 19.5249 26.2188C19.5249 26.9779 20.1402 27.5932 20.8993 27.5932Z" fill="#A0AEC0"/>
// <path d="M20.8993 15.2239C20.1434 15.2239 19.5249 15.8423 19.5249 16.5982V22.0957C19.5249 22.8516 20.1434 23.47 20.8993 23.47C21.6552 23.47 22.2736 22.8516 22.2736 22.0957V16.5982C22.2736 15.8423 21.6552 15.2239 20.8993 15.2239Z" fill="#A0AEC0"/>
// </g>
// <defs>
// <clipPath id="clip0_0_1">
// <rect width="16.4923" height="16.4923" fill="white" transform="translate(12.6531 13.1624)"/>
// </clipPath>
// </defs>
// </svg>
// </span>
//           <div>
//             <p className="font-medium">Webflow</p>
//             <p className="text-xs text-gray-500">26 March 2020, at 05:00 AM</p>
//           </div>
//         </div>
//         <span className="text-gray-400 font-medium">Pending</span>
//       </div>

//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <span className="material-icons text-red-400 text-lg"><svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
// <circle cx="20.8991" cy="20.7682" r="20.0264" stroke="#E31A1A" stroke-width="1.17802"/>
// <path d="M24.8748 21.0996L20.8989 25.0754L16.9231 21.0996" stroke="#E31A1A" stroke-width="1.32528" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M20.8987 24.5233L20.8987 16.4612" stroke="#E31A1A" stroke-width="1.32528" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
// </span>
//           <div>
//             <p className="font-medium">Microsoft</p>
//             <p className="text-xs text-gray-500">25 March 2020, at 16:30 PM</p>
//           </div>
//         </div>
//         <span className="text-red-400 font-medium">-$987</span>
//       </div>
//     </div>
//   </div>
// </div>

// </div>
// </div>
// </div>
    
//   );
// };

// export default Dashboard;



// "use client";
// import { useState } from "react";
// import { PieChart, Pie, Cell, Tooltip } from "recharts";
// import { FaBook, FaExchangeAlt, FaUsers, FaBars } from "react-icons/fa";
// import Borowed from "@/app/Dashboard-User/Borowed"
// import Lane from "@/app/Dashboard-User/Lane"
// import Link from "next/link";

// const Dashboard = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const data = [
//     { name: "Borrowed Books", value: 600 },
//     { name: "Returned Books", value: 900 }
//   ];
//   const COLORS = ["#00C49F", "#0088FE"];

//   return (
//     <>
//     <div className="flex bg-gradient-to-br from-[#10111A] to-[#1A1C2D] min-h-screen text-white">
//       {/* Sidebar */}
//       <div className={`bg-[#1C1C2E] w-64 h-screen p-5 flex flex-col text-white fixed transition-all duration-300 ${menuOpen ? "left-0" : "-left-64"} md:left-0`}>
//         <h2 className="text-2xl font-bold mb-6">Library Name</h2>
//         <nav className="flex flex-col gap-4">
//           <a href="#" className="flex items-center gap-3 hover:text-gray-400"><FaBars /> Dashboard</a>
//           <a href="#" className="flex items-center gap-3 hover:text-gray-400"><FaBook /> Books</a>
//           <a href="#" className="flex items-center gap-3 hover:text-gray-400"><FaExchangeAlt /> Transactions</a>
//           <a href="#" className="flex items-center gap-3 hover:text-gray-400"><FaUsers /> Users</a>
//         </nav>
//         <div className="mt-auto">
//           <h3 className="text-sm text-gray-400">Account Menu</h3>
//           <Link href="/Borowed" className="block mt-2 hover:text-gray-400">Catalog</Link>
//           <a href="#" className="block hover:text-gray-400">Sign In</a>
//           <a href="#" className="block hover:text-gray-400">Sign Up</a>
//         </div>
//       </div>

//       {/* Main Dashboard */}
//       <div className="ml-0 md:ml-64 p-6 w-full">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
//           <h1 className="text-2xl font-bold">Dashboard</h1>
//           <input type="text" placeholder="Search here..." className="bg-[#2A2D3E] text-white p-2 rounded-lg w-64" />
//         </div>

//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Overdue Borrowers */}
//           <div className="bg-gradient-to-br from-[#2A2D3E] to-[#1A1C2D] p-4 rounded-2xl shadow-lg">
//             <h2 className="text-lg font-semibold mb-3">Overdue Borrowers</h2>
//             <ul>
//               <li className="flex justify-between">John Doe <span className="text-red-400">3 days overdue</span></li>
//               <li className="flex justify-between">Jane Smith <span className="text-red-400">5 days overdue</span></li>
//             </ul>
//           </div>

//           {/* Library Admins */}
//           <div className="bg-gradient-to-br from-[#2A2D3E] to-[#1A1C2D] p-4 rounded-2xl shadow-lg">
//             <h2 className="text-lg font-semibold mb-3">Library Admins</h2>
//             <ul>
//               <li>Admin 1</li>
//               <li>Admin 2</li>
//             </ul>
//           </div>

//           {/* Browse Available Books */}
//           <div className="bg-gradient-to-br from-[#2A2D3E] to-[#1A1C2D] p-4 rounded-2xl shadow-lg">
//             <h2 className="text-lg font-semibold mb-3">Browse Available Book Inventory</h2>
//             <ul>
//               <li>Book A - 10 copies</li>
//               <li>Book B - 5 copies</li>
//             </ul>
//           </div>

//           {/* Books Ratio (Pie Chart) */}
//           <div className="bg-gradient-to-br from-[#2A2D3E] to-[#1A1C2D] p-4 rounded-2xl shadow-lg flex flex-col items-center">
//             <h2 className="text-lg font-semibold mb-3">Books Ratio</h2>
//             <PieChart width={250} height={250}>
//               <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value">
//                 {data.map((_, index) => (<Cell key={`cell-${index}`} fill={COLORS[index]} />))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </div>

//           {/* Total Users and Books */}
//           <div className="bg-gradient-to-br from-[#2A2D3E] to-[#1A1C2D] p-4 rounded-2xl shadow-lg">
//             <h2 className="text-lg font-semibold mb-3">Statistics</h2>
//             <div className="flex justify-between">
//               <div className="p-4 bg-[#2A2D3E] rounded-lg">
//                 <p>Total Users</p>
//                 <h3 className="text-xl font-bold">150</h3>
//               </div>
//               <div className="p-4 bg-[#2A2D3E] rounded-lg">
//                 <p>Total Books</p>
//                 <h3 className="text-xl font-bold">1500</h3>
//               </div>
//             </div>
//           </div>

//           {/* Library Transactions */}
//           <div className="bg-gradient-to-br from-[#2A2D3E] to-[#1A1C2D] p-4 rounded-2xl shadow-lg">
//             <h2 className="text-lg font-semibold mb-3">Library Transactions</h2>
//             <ul>
//               <li className="flex justify-between"><span>Nemita</span> <span className="text-green-400">+250</span></li>
//               <li className="flex justify-between"><span>John</span> <span className="text-green-400">+150</span></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//     <Borowed />
//     <Lane />
//     </>
//   );
// };

// export default Dashboard;



// import React from 'react';
// import { Search, Settings, Bell } from 'lucide-react';
// import { Pie } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const Dashboard = () => {
//   const pieData = {
//     labels: ['Total Borrowed Books', 'Total Returned Books'],
//     datasets: [{
//       data: [60, 40],
//       backgroundColor: ['#4361EE', '#A78BFA'],
//       borderWidth: 0,
//     }],
//   };

//   const pieOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//   };

//   return (
//     <div className="flex flex-col lg:flex-row min-h-screen bg-[#E4FBFF]">
//       {/* Sidebar */}
//       <div
//         className="w-full lg:w-64 p-6"
//         style={{
//           background: 'linear-gradient(111.84deg, #3B156D 59.3%, rgba(26, 31, 55, 0) 100%)',
//         }}
//       >
//         <h1 className="text-xl font-semibold text-white mb-12">LIBRARY NAME</h1>
        
//         {/* Main Navigation */}
//         <div className="space-y-2 mb-12">
//           <h2 className="text-gray-400 text-sm mb-4">MAIN MENU</h2>
//           <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-purple-700/50 text-white">
//             <span>Dashboard Icon</span>
//             <span>Dashboard</span>
//           </a>
//           <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-purple-700/30">
//             <span>Books Icon</span>
//             <span>Books</span>
//           </a>
//           <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-purple-700/30">
//             <span>Billing Icon</span>
//             <span>Billing</span>
//           </a>
//           <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-purple-700/30">
//             <span>Catalog Icon</span>
//             <span>Catalog</span>
//           </a>
//         </div>

//         {/* Account Pages */}
//         <div className="space-y-2">
//           <h2 className="text-gray-400 text-sm mb-4">ACCOUNT PAGES</h2>
//           <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-purple-700/30">
//             <span>Profile Icon</span>
//             <span>Profile</span>
//           </a>
//           <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-purple-700/30">
//             <span>Sign In Icon</span>
//             <span>Sign In</span>
//           </a>
//           <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-purple-700/30">
//             <span>Sign Up Icon</span>
//             <span>Sign Up</span>
//           </a>
//         </div>

//         {/* Help Card */}
//         <div className="mt-12 p-4 rounded-xl bg-cover bg-center" style={{ backgroundImage: "url('/help.jpeg')" }}>
//           <span>Help Icon</span>
//           <h3 className="text-white font-semibold mb-1">Need help?</h3>
//           <p className="text-blue-200 text-sm mb-2">Please check our docs</p>
//           <button className="w-full text-white rounded-lg py-2 text-sm font-medium" style={{ background: 'linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)' }}>
//             DOCUMENTATION
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <header className="flex flex-col lg:flex-row justify-between items-center mb-6">
//           <div className="text-800 text-5xl mb-4 lg:mb-0">Dashboard</div>
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Type here..."
//                 className="pl-10 pr-4 py-1.5 rounded-full bg-[#0F1535] text-gray-400 placeholder-gray-400 w-64 text-sm focus:outline-none"
//               />
//               <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//             </div>
//             <button className="text-gray-600 text-sm">Sign In</button>
//             <button className="p-2">
//               <Settings className="w-5 h-5 text-gray-600" />
//             </button>
//             <button className="p-2">
//               <Bell className="w-5 h-5 text-gray-600" />
//             </button>
//           </div>
//         </header>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
//           {/* Borrowed Books */}
//           <div className="text-white p-4 rounded-lg" style={{ background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)" }}>
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xs font-bold">YOUR BORROWED BOOKS LIST</h2>
//               <button className="bg-blue-500 text-white px-2 py-1 text-xs rounded-md hover:bg-blue-600">VIEW ALL</button>
//             </div>
//             <div className="space-y-2">
//               {[1, 2, 3].map((_, index) => (
//                 <div key={index} className="flex items-center justify-between p-2 rounded-md" style={{ background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)" }}>
//                   <div className="flex items-center">
//                     <img src="/1.png" alt="Book" className="w-8 h-12 object-cover mr-2" />
//                     <div>
//                       <p className="font-medium text-xs">Esthera Jackson</p>
//                       <p className="text-[10px] text-gray-300">esthera@simmmp.com</p>
//                     </div>
//                   </div>
//                   <div className="text-[10px] flex items-center gap-1">
//                     <p>14/06/21</p>
//                     <button className="text-gray-400 hover:underline">Edit</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Returned Books */}
//           <div className="text-white p-4 rounded-lg" style={{ background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)" }}>
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xs font-bold">YOUR RETURNED BOOK LIST</h2>
//               <button className="bg-blue-500 text-white px-2 py-1 text-xs rounded-md hover:bg-blue-600">VIEW ALL</button>
//             </div>
//             <div className="space-y-2">
//               {[1, 2, 3].map((_, index) => (
//                 <div key={index} className="flex items-center justify-between p-2 rounded-md" style={{ background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)" }}>
//                   <div className="flex items-center">
//                     <img src="/1.png" alt="Book" className="w-8 h-12 object-cover mr-2" />
//                     <div>
//                       <p className="font-medium text-xs">Esthera Jackson</p>
//                       <p className="text-[10px] text-gray-300">esthera@simmmp.com</p>
//                     </div>
//                   </div>
//                   <div className="text-[10px] flex items-center gap-1">
//                     <p>14/06/21</p>
//                     <button className="text-gray-400 hover:underline">Edit</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Available Books */}
//           <div className="text-white p-4 rounded-lg" style={{ background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)" }}>
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xs font-bold">Browse Available Book Inventory</h2>
//               <button className="bg-blue-500 text-white px-2 py-1 text-xs rounded-md hover:bg-blue-600">VIEW ALL</button>
//             </div>
//             <div className="space-y-2">
//               {[1, 2, 3].map((_, index) => (
//                 <div key={index} className="flex items-center justify-between p-2 rounded-md" style={{ background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)" }}>
//                   <div className="flex items-center">
//                     <img src="/1.png" alt="Book" className="w-8 h-12 object-cover mr-2" />
//                     <div>
//                       <p className="font-medium text-xs">Esthera Jackson</p>
//                       <p className="text-[10px] text-gray-300">esthera@simmmp.com</p>
//                     </div>
//                   </div>
//                   <div className="text-[10px] flex items-center gap-1">
//                     <p>14/06/21</p>
//                     <button className="text-gray-400 hover:underline">Edit</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Books Ratio */}
//           <div className="bg-gradient-to-br from-[#060B28F0] to-[#595a62] rounded-2xl p-6 shadow-lg">
//             <h2 className="font-semibold text-xl text-white text-center mb-6">BOOKS RATIO</h2>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
//               <div className="relative flex justify-center items-center">
//                 <div className="w-48 h-48 rounded-full" style={{ background: 'conic-gradient(#314BCE 0deg 216deg, #C2A2F5 216deg 360deg)', transform: 'rotate(-215deg)' }}></div>
//               </div>
//               <div className="space-y-4">
//                 <div className="flex items-center bg-[#D2BFFF] p-4 rounded-xl shadow-md">
//                   <div className="bg-[#4760FF] p-2 rounded-lg">
//                     <span>User Icon</span>
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-lg font-bold text-black">0150</p>
//                     <p className="text-sm text-gray-700">Total User Base</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center bg-[#D2BFFF] p-4 rounded-xl shadow-md">
//                   <div className="bg-[#F8D25B] p-2 rounded-lg">
//                     <span>Book Icon</span>
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-lg font-bold text-black">01500</p>
//                     <p className="text-sm text-gray-700">Total Book Count</p>
//                   </div>
//                 </div>
//                 <div className="mt-4 bg-[#F8D25B] p-3 rounded-xl">
//                   <div className="flex flex-col gap-4">
//                     <div className="flex items-center gap-2">
//                       <div className="w-3 h-3 rounded-full bg-[#C2A2F5]"></div>
//                       <span className="text-sm font-medium text-black">Total Borrowed Books</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-3 h-3 rounded-full bg-[#4760FF]"></div>
//                       <span className="text-sm font-medium text-black">Total Returned Books</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Transactions */}
//           <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6 shadow-lg">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="font-semibold text-lg">Your Transactions</h2>
//               <div className="text-sm text-gray-400 flex items-center gap-2">
//                 <span>Calendar Icon</span>
//                 <span>23 - 30 March 2020</span>
//               </div>
//             </div>
//             <div className="space-y-6">
//               <div>
//                 <h3 className="text-gray-500 text-sm uppercase mb-2">Newest</h3>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <span className="material-icons text-red-400 text-lg">Netflix Icon</span>
//                     <div>
//                       <p className="font-medium">Netflix</p>
//                       <p className="text-xs text-gray-500">27 March 2020, at 12:30 PM</p>
//                     </div>
//                   </div>
//                   <span className="text-red-400 font-medium">-$2500</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <span className="material-icons text-green-400 text-lg">Apple Icon</span>
//                     <div>
//                       <p className="font-medium">Apple</p>
//                       <p className="text-xs text-gray-500">27 March 2020, at 12:30 PM</p>
//                     </div>
//                   </div>
//                   <span className="text-green-400 font-medium">+$2500</span>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-gray-500 text-sm uppercase mb-2">Yesterday</h3>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <span className="material-icons text-green-400 text-lg">Stripe Icon</span>
//                     <div>
//                       <p className="font-medium">Stripe</p>
//                       <p className="text-xs text-gray-500">26 March 2020, at 13:45 PM</p>
//                     </div>
//                   </div>
//                   <span className="text-green-400 font-medium">+$800</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <span className="material-icons text-green-400 text-lg">HubSpot Icon</span>
//                     <div>
//                       <p className="font-medium">HubSpot</p>
//                       <p className="text-xs text-gray-500">26 March 2020, at 12:30 PM</p>
//                     </div>
//                   </div>
//                   <span className="text-green-400 font-medium">+$1700</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <span className="material-icons text-gray-400 text-lg">Webflow Icon</span>
//                     <div>
//                       <p className="font-medium">Webflow</p>
//                       <p className="text-xs text-gray-500">26 March 2020, at 05:00 AM</p>
//                     </div>
//                   </div>
//                   <span className="text-gray-400 font-medium">Pending</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <span className="material-icons text-red-400 text-lg">Microsoft Icon</span>
//                     <div>
//                       <p className="font-medium">Microsoft</p>
//                       <p className="text-xs text-gray-500">25 March 2020, at 16:30 PM</p>
//                     </div>
//                   </div>
//                   <span className="text-red-400 font-medium">-$987</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


