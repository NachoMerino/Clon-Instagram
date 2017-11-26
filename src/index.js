import $ from 'jquery';
import './styles.scss';
import navbar from './templates/navbar.html';
import footer from './templates/footer.html';

/* eslint-disable */
const user1 = [{
    'userProfilePict': 'photos/user1/profile1.jpeg',
    'userName': 'NachoMerino',
    'text': 'Learning how to be a Web developer #nachomerino #developer #js #instagramclon',
    'webpage': 'www.github.com/NachoMerino',
    'posts': '65',
    'followers': '3.892',
    'following': '45',
  },
  'photos/user1/adler-2918835_1920.jpg',
  'photos/user1/apple-2924531_1920.jpg',
  'photos/user1/axe-1748305_1920.jpg',
  'photos/user1/balloon-2921973_1920.jpg',
  'photos/user1/banana-2181470_1920.jpg',
  'photos/user1/black-swan-2807716_1920.jpg',
];
const user2 = [{
    'userProfilePict': 'photos/user2/profile2.jpg',
    'userName': 'Vernon King',
    'text': 'Down And Out:A term used in a boxing. (2) Someone who has become incapacitated.',
    'webpage': 'www.Vernon-King.com',
    'posts': '265',
    'followers': '7.812',
    'following': '25',
  },
  'photos/user2/box-2953722_1920.jpg',
  'photos/user2/butterfly-2733287_1920.jpg',
  'photos/user2/christmas-2947257_1920.jpg',
  'photos/user2/cow-2788835_1920.jpg',
  'photos/user2/face-2936245_1920.jpg',
  'photos/user2/fantasy-2925250_1920.jpg',
  'photos/user2/flower-2919284_1920.jpg',
  'photos/user2/garlic-2810491_1920.jpg',
];
const user3 = [{
    'userProfilePict': 'photos/user3/profile3.jpg',
    'userName': 'Teresa Huang',
    'text': 'Talk the Talk: Supporting what you say, not just with words, but also through action or evidence.',
    'webpage': 'www.Teresa-Huang.com',
    'posts': '765',
    'followers': '343.892',
    'following': '45',
  },
  'photos/user3/girl-2940655_1920.jpg',
  'photos/user3/guitar-2925274_1920.jpg',
  'photos/user3/jaguar-2894706_1920.jpg',
  'photos/user3/lake-2763432_1920.jpg',
  'photos/user3/money-2696234_1920.jpg',
  'photos/user3/peppers-2786684_1920.jpg',
  'photos/user3/pickle-man.jpg',
  'photos/user3/powerboat-2784250_1920.jpg',
  'photos/user2/butterfly-2733287_1920.jpg',
  'photos/user2/christmas-2947257_1920.jpg',
  'photos/user2/cow-2788835_1920.jpg',
  'photos/user2/face-2936245_1920.jpg',
  'photos/user2/fantasy-2925250_1920.jpg',
  'photos/user2/flower-2919284_1920.jpg',
];
const user4 = [{
    'userProfilePict': 'photos/user4/profile4.jpg',
    'userName': 'Darrin Proctor',
    'text': 'Cry Over Spilt Milk: It is useless to worry about things that  already happened and cannot be changed.',
    'webpage': 'www.Darrin-Proctor.com',
    'posts': '655',
    'followers': '4.343.892',
    'following': '12',
  },
  'photos/user4/spaghetti-2931846_1920.jpg',
  'photos/user4/trees-2920264_1920.jpg',
  'photos/user4/truck-2920533_1920.jpg',
  'photos/user4/vegetables-2924245_1920.jpg',
  'photos/user4/water-2943518_1920.jpg',
];
/* eslint-enable */

function loadUserData(userName) {
  const userData = `
  <div id="user-info" class="container">
  <div class="row">
    <div id="user-pict" class="col-3">
      <div>
        <img src="../static/${userName[0].userProfilePict}">
      </div>
    </div>
    <div class="col">
      <section>
        <div class="tittle-follow">
          <h1>${userName[0].userName}</h1>
          <span>
            <button class="btn btn-primary">Follow</button>
          </span>
        </div>
        <ul class="post-followers">
          <li><b>${userName[0].posts}</b> posts</li>
          <li><b>${userName[0].followers}</b> followers</li>
          <li><b>${userName[0].following}</b> following</li>
        </ul>
        <div class="description">
          ${userName[0].text} <a href="https://${userName[0].webpage}" target="_blank">${userName[0].webpage}</a>
        </div>
      </section>
    </div>
  </div>
</div>
<div id="pictures" class="container">
  <div class="row">
  </div>
</div>`;
  $('#user-info').append(userData);
}

function loadUserPict(userName) {
  $.each(userName, (index) => {
    const likes = Math.floor((Math.random() * 100));
    const comments = Math.floor((Math.random() * 10));
    $('#pictures > .row').append(`
      <div class="col-12 col-sm-6 col-md-4 grid-pict">
        <a href="../static/${userName[index + 1]}"><img data-id="${index + 1}" src="../static/${userName[index + 1]}"></a>
        <div class="middle">
        <h3 class="${index + 1}">💙 ${likes}  💬 ${comments}</h3>
        </div> 
      </div>`);
  });
}

$(() => {
  const userName = user1;
  $('#root')
    .append(navbar)
    .append(footer);
  loadUserData(userName);
  loadUserPict(userName);
  $('#primary-nav ul li').click((e) => {
    $('#root')
      .empty()
      .append(navbar)
      .append(footer);
    const { target } = e;
    const user = target.getAttribute('id');
    if (user === 'user2') {
      const users = user2;
      loadUserData(users);
      loadUserPict(users);
    } else if (user === 'user3') {
      const users = user3;
      loadUserData(users);
      loadUserPict(users);
    } else if (user === 'user4') {
      const users = user4;
      loadUserData(users);
      loadUserPict(users);
    } else if (user === 'user1') {
      loadUserData(user1);
      loadUserPict(user1);
    }
  });
});
