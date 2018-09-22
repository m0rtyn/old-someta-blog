// const TelegramBot = require('node-telegram-bot-api');
// const token = '544076118:AAHfa901l8xedmOLRm7ddfyWRyaT06Axgpo';
// const bot = new TelegramBot(token, {polling: true});

// const next = document.getElementById('btn-next');
// const prew = document.getElementById('btn-prew');
// const wrap = document.getElementById('telegram-wrapper');
// const metaStr = 'metabaza/'


// const nextMessage = (e) => {
//   console.log('next');
//   const fr = wrap.getElementsByTagName('iframe')[0]
//   const srcParts = fr.src.split(metaStr)
//   srcParts[1] = srcParts[1].split('?')
//   srcParts[1][0] = Number(srcParts[1][0]) + 1
//   srcParts[1] = srcParts[1].join('?')
//   fr.src = srcParts.join(metaStr)
//   fr.src = srcParts.join(metaStr)
// }

// const prewMessage = (e) => {
//   console.log('prew');
//   const fr = wrap.getElementsByTagName('iframe')[0]
//   const srcParts = fr.src.split(metaStr)
//   srcParts[1] = srcParts[1].split('?')
//   if (srcParts[1][0] > 11) {
//     srcParts[1][0] = Number(srcParts[1][0]) - 1
//     srcParts[1] = srcParts[1].join('?')
//     fr.src = srcParts.join(metaStr)
//     } else {
//     srcParts[1] = srcParts[1].join('?')
//     fr.src = srcParts.join(metaStr)
//   }
// }

// next.addEventListener('click', nextMessage);
// prew.addEventListener('click', prewMessage);


// bot.onText(/\/generate/, (msg, match) => {

//   const defineLastMessage = (i) => {
//     bot.forwardMessage('@mrtnsn_test', '@metabaza', i)
//     .then(
//       result => {
//         const fr = wrap.getElementsByTagName('iframe')[0]
//         const srcParts = fr.src.split(metaStr)
//         srcParts[1] = srcParts[1].split('?')
//         if (srcParts[1][0] > 11) {
//           srcParts[1][0] = i;
//           srcParts[1] = srcParts[1].join('?')
//           fr.src = srcParts.join(metaStr)
//           } else {
//           srcParts[1] = srcParts[1].join('?')
//           fr.src = srcParts.join(metaStr)
//         }
//         return i;
//       },
//       error => {
//         i -= 1;
//         defineLastMessage( i );
//       }
//     );
//   }

//   let i = 99;
//   defineMessageCount(i);
// });

