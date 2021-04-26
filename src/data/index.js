import news1Img from '@/assets/images/news/news_1.jpg';
import news2Img from '@/assets/images/news/news_2.jpg';
import news3Img from '@/assets/images/news/news_3.jpg';
import news4Img from '@/assets/images/news/news_4.jpg';
import experience1Img from '@/assets/images/expertise/experience_1.jpg';
import experience2Img from '@/assets/images/expertise/experience_2.jpg';
import experience3Img from '@/assets/images/expertise/experience_3.jpg';
import experience4Img from '@/assets/images/expertise/experience_4.jpg';

export const NewsData = [
  {
    id: 0,
    pictrue: news4Img,
    date: '2021.04.15',
    title: '「眼睛持續疲勞，老花提早報到？」<br>Heho健康網報導',
    description: '您也是眼睛容易疲勞的人嗎？你試著配了幾副眼鏡，但問題仍然無法獲得緩解？造成眼睛疲勞可能不僅一個因素，需要透過更精確、深入的量測流程才能找出適合的解決方案！<br><br>來看<a href="https://heho.com.tw/archives/168005" target="_blank">Heho健康網完整報導</a>。',
    link: 'https://heho.com.tw/archives/168005',
    linkTarget: '_blank',
  },
  {
    id: 1,
    pictrue: news1Img,
    date: '2021.03.15',
    title: '網路預約，全新上線！',
    description: '為了避免您久候，除了使用電話預約，現在還可透過官方網站線上預約囉！請到<a href="access.html">搜尋店舖&預約</a>，找到您想要諮詢的眼鏡店，點選預約連結，立即<a href="access.html">線上預約</a>。',
    link: '#/locations',
    linkTarget: '_self',
  },
  {
    id: 2,
    pictrue: news3Img,
    date: '2020.03.26',
    title: '「Nikon視光體驗中心再造附加價值」<br>今周刊報導',
    description: 'Nikon鏡片視光體驗中心，自2020年開始成立，正在用一種新型態的經營模式，開啟全新的配鏡體驗，這轉型之路是怎麼開始的呢？來看看<a href="https://www.businesstoday.com.tw/article/category/80393/post/202003240018/" target="_blank">今周刊</a>的詳盡報導。',
    link: 'https://www.businesstoday.com.tw/article/category/80393/post/202003240018/',
    linkTarget: '_blank',
  },
  {
    id: 3,
    pictrue: news2Img,
    date: '2021.03.1',
    title: '「金馬設計師方序中」專訪影片： <br>如何從平凡中看到不凡',
    description: '在國內夙負盛名的視覺設計師 -「方序中」接受Nikon鏡片的專訪，談談他在金馬獎典禮的設計觀點，以及配戴Nikon鏡片的體驗感想，<a href="https://youtu.be/rNFuxzvJ2eY" target="_blank">點我看完整影片</a>。',
    link: 'https://youtu.be/rNFuxzvJ2eY',
    linkTarget: '_blank',
  },
];

export const PhaseData = [
  {
    id: 0,
    img: experience1Img,
    title: '問診與驗光',
    step: [
      {
        id: 1,
        order: '第1步',
        title: '問診',
        description: '驗光人員會詢問用眼習慣，了解您的視力需求，並且釐清有哪些視力的困擾。',
      },
      {
        id: 2,
        order: '第2步',
        title: '精密驗光',
        description: '我們引進高階驗光設備，量測水晶體透明度、光線進入瞳孔的角度、日夜像差、眩光敏感度、調節力等，全方位評估視力問題。',
      },
    ],
  },
  {
    id: 1,
    img: experience2Img,
    title: '評估與體驗',
    step: [
      {
        id: 3,
        order: '第3步',
        title: '視力評估',
        description: '綜合檢查結果，為您解讀視力問題成因與可行解決方案。',
      },
      {
        id: 4,
        order: '第4步',
        title: '視覺體驗',
        description: '鏡片種類玲瑯滿目，眼見為憑最重要，戴上試鏡架並動手試試展示工具，親自看看什麼鏡片最符合您的需要。',
      },
    ],
  },
  {
    id: 2,
    img: experience3Img,
    title: '客製化方案',
    step: [
      {
        id: 5,
        order: '第5步',
        title: '客製化方案',
        description: '除了專業驗光技術，我們也是解決視力問題的專家，我們擅長推薦最符合您需求的鏡片。',
      },
    ],
  },
  {
    id: 3,
    img: experience4Img,
    title: '鏡框定位與文宣',
    step: [
      {
        id: 6,
        order: '第6步',
        title: '鏡框與定位',
        description: '鏡框戴在臉上的角度也會影響眼前清晰程度，用準確的鏡框定位數據，為您量身打造鏡片。',
      },
      {
        id: 7,
        order: '第7步',
        title: '文宣介紹',
        description: '最後您會拿到一份文宣簡介，回家後還可細讀剛才的檢測介紹。',
      },
    ],
  },
];
