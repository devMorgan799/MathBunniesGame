//background image

/* background-image: url("https://images.unsplash.com/photo-1517707711963-adf9078bdf01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"); */
    


// .rabbit {
//     width:5em;
//     height:3em;
//     background:#ffffff;
//     border-radius:70% 90% 60% 50%;
//     position:relative;
//     box-shadow: -0.2em 1em 0 -0.75em #b78e81;
//     @include transform(rotate(0deg) translate(-2em,0));
//     animation: hop 1s infinite linear;
//     z-index:1;
//     .no-flexbox & {margin:10em auto 0;}
//     //tail, eye, feet
//     &:before {
//       content:"";
//       position:absolute;
//       width:1em;
//       height:1em;
//       background:white; // tail
//       border-radius:100%;
//       top:0.5em;
//       left:-0.3em;
//       box-shadow:
//         4em 0.4em 0 -0.35em #3f3334, // eye
//         0.5em 1em 0 white, // back foot
//         4em 1em 0 -0.3em white, // front foot
//         4em 1em 0 -0.3em white,
//         4em 1em 0 -0.4em white;;
//       animation: kick 1s infinite linear;
//     }
//     // ears
//     &:after {
//       content:"";
//       position:absolute;
//       width:.75em;
//       height:2em;
//       background:white;
//       border-radius:50% 100% 0 0;
//       @include transform(rotate(-30deg));
//       right:1em;
//       top:-1em;
//       border-top:1px solid #f7f5f4;
//       border-left: 1px solid #f7f5f4;
//       box-shadow:-0.5em 0em 0 -0.1em white;
//     }
//   }
  
//   .clouds {
//     background:white;
//     width:2em;
//     height:2em;
//     border-radius:100% 100% 0 0;
//     position:relative;
//     top:-5em;
//     @include opacity(0);
//     @include transform(translate(0,0));
//     animation: cloudy 1s infinite linear forwards;
//     box-shadow:5em 2em 0 -0.3em white, -2em 2em 0 0 white;
//     &:before,&:after {
//       content:'';
//       position:absolute;
//       box-shadow:5em 2em 0 -0.3em white, -2em 2em 0 white;
//     }
//     &:before {
//       width:1.25em;
//       height:1.25em;
//       border-radius:100% 100% 0 100%;
//       background:white;
//       left:-30%;
//       bottom:0;
//     }
//     &:after {
//       width:1.5em;
//       height:1.5em;
//       border-radius:100% 100% 100% 0;
//       background:white;
//       right:-30%;
//       bottom:0;
//     }
//   }
  
  
//   @keyframes hop {
//     20% {
//       @include transform(rotate(-10deg) translate(1em,-2em));
//       box-shadow: -0.2em 3em 0 -1em #b78e81;
//     }
//     40% {
//       @include transform(rotate(10deg) translate(3em,-4em));
//       box-shadow: -0.2em 3.25em 0 -1.1em #b78e81;
//     }
//     60%,75% {
//       @include transform(rotate(0) translate(4em,0));
//       box-shadow: -0.2em 1em 0 -0.75em #b78e81;
//     }
//   }
  
  
  
//   @keyframes kick {
//     20%,50% {
//       box-shadow:
//         4em 0.4em 0 -0.35em #3f3334,
//         0.5em 1.5em 0 white,
//         4em 1.75em 0 -0.3em white,
//         4em 1.75em 0 -0.3em white,
//         4em 1.9em 0 -0.4em white;
//     }
//     40% {
//       box-shadow:
//         4em 0.4em 0 -0.35em #3f3334,
//         0.5em 2em 0 white,
//         4em 1.75em 0 -0.3em white,
//         4.2em 1.75em 0 -0.2em white,
//         4.4em 1.9em 0 -0.2em white;
//     }
//   }
  
//   @keyframes cloudy {
//    40% {
//       @include opacity(0.75);
//       @include transform(translate(-3em,0));
//     }
//     55% {
//       @include opacity(0);
//       @include transform(translate(-4em,0));
//     }
//     90% {
//       @include transform(translate(0,0));
//     }
//   }