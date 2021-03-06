angular.module('app')

.factory('FontAwesomeSrv', function(){
  var all = [
    {name: 'fa-file', tags: ['file', 'text']},
    {name: 'fa-file-o', tags: ['file', 'text']},
    {name: 'fa-file-text', tags: ['file', 'text']},
    {name: 'fa-file-text-o', tags: ['file', 'text']},
    {name: 'fa-file-archive-o', tags: ['file', 'web']},
    {name: 'fa-file-audio-o', tags: ['file', 'web']},
    {name: 'fa-file-code-o', tags: ['file', 'web']},
    {name: 'fa-file-excel-o', tags: ['file', 'web']},
    {name: 'fa-file-image-o', tags: ['file', 'web']},
    {name: 'fa-file-pdf-o', tags: ['file', 'web']},
    {name: 'fa-file-powerpoint-o', tags: ['file', 'web']},
    {name: 'fa-file-video-o', tags: ['file', 'web']},
    {name: 'fa-file-word-o', tags: ['file', 'web']},

    {name: 'fa-circle-o-notch', tags: ['spinner', 'web']},
    {name: 'fa-cog', tags: ['spinner', 'web']},
    {name: 'fa-refresh', tags: ['spinner', 'web']},
    {name: 'fa-spinner', tags: ['spinner', 'web']},

    {name: 'fa-square', tags: ['form', 'web']},
    {name: 'fa-circle', tags: ['form', 'web']},
    {name: 'fa-square-o', tags: ['form', 'web']},
    {name: 'fa-circle-o', tags: ['form', 'web']},
    {name: 'fa-plus', tags: ['form', 'web']},
    {name: 'fa-minus', tags: ['form', 'web']},
    {name: 'fa-plus-square', tags: ['form', 'web', 'medical']},
    {name: 'fa-plus-circle', tags: ['form', 'web']},
    {name: 'fa-minus-square', tags: ['form', 'web']},
    {name: 'fa-minus-circle', tags: ['form', 'web']},
    {name: 'fa-plus-square-o', tags: ['form', 'web']},
    {name: 'fa-minus-square-o', tags: ['form', 'web']},
    {name: 'fa-check-square', tags: ['form', 'web']},
    {name: 'fa-check-square-o', tags: ['form', 'web']},
    {name: 'fa-dot-circle-o', tags: ['form', 'web']},

    {name: 'fa-area-chart', tags: ['chart', 'web']},
    {name: 'fa-bar-chart', tags: ['chart', 'web']},
    {name: 'fa-line-chart', tags: ['chart', 'web']},
    {name: 'fa-pie-chart', tags: ['chart', 'web']},

    {name: 'fa-money', tags: ['currency', 'web']},
    {name: 'fa-btc', tags: ['currency', 'social']},
    {name: 'fa-eur', tags: ['currency']},
    {name: 'fa-gbp', tags: ['currency']},
    {name: 'fa-ils', tags: ['currency']},
    {name: 'fa-inr', tags: ['currency']},
    {name: 'fa-jpy', tags: ['currency']},
    {name: 'fa-krw', tags: ['currency']},
    {name: 'fa-rub', tags: ['currency']},
    {name: 'fa-try', tags: ['currency']},
    {name: 'fa-usd', tags: ['currency']},

    {name: 'fa-align-center', tags: ['text']},
    {name: 'fa-align-justify', tags: ['text']},
    {name: 'fa-align-left', tags: ['text']},
    {name: 'fa-align-right', tags: ['text']},
    {name: 'fa-bold', tags: ['text']},
    {name: 'fa-chain-broken', tags: ['text']},
    {name: 'fa-clipboard', tags: ['text']},
    {name: 'fa-columns', tags: ['text']},
    {name: 'fa-eraser', tags: ['text', 'web']},
    {name: 'fa-files-o', tags: ['text']},
    {name: 'fa-floppy-o', tags: ['text']},
    {name: 'fa-font', tags: ['text']},
    {name: 'fa-header', tags: ['text']},
    {name: 'fa-indent', tags: ['text']},
    {name: 'fa-italic', tags: ['text']},
    {name: 'fa-link', tags: ['text']},
    {name: 'fa-list', tags: ['text']},
    {name: 'fa-list-alt', tags: ['text']},
    {name: 'fa-list-ol', tags: ['text']},
    {name: 'fa-list-ul', tags: ['text']},
    {name: 'fa-outdent', tags: ['text']},
    {name: 'fa-paperclip', tags: ['text']},
    {name: 'fa-paragraph', tags: ['text']},
    {name: 'fa-repeat', tags: ['text']},
    {name: 'fa-scissors', tags: ['text']},
    {name: 'fa-strikethrough', tags: ['text']},
    {name: 'fa-subscript', tags: ['text']},
    {name: 'fa-superscript', tags: ['text']},
    {name: 'fa-table', tags: ['text']},
    {name: 'fa-text-height', tags: ['text']},
    {name: 'fa-text-width', tags: ['text']},
    {name: 'fa-th', tags: ['text']},
    {name: 'fa-th-large', tags: ['text']},
    {name: 'fa-th-list', tags: ['text']},
    {name: 'fa-underline', tags: ['text']},
    {name: 'fa-undo', tags: ['text']},

    {name: 'fa-arrows', tags: ['directional', 'arrow', 'web']},
    {name: 'fa-arrows-alt', tags: ['directional', 'arrow', 'video', 'web']},
    {name: 'fa-arrows-h', tags: ['directional', 'arrow', 'web']},
    {name: 'fa-arrows-v', tags: ['directional', 'arrow', 'web']},
    {name: 'fa-angle-double-down', tags: ['directional', 'arrow']},
    {name: 'fa-angle-double-left', tags: ['directional', 'arrow']},
    {name: 'fa-angle-double-right', tags: ['directional', 'arrow']},
    {name: 'fa-angle-double-up', tags: ['directional', 'arrow']},
    {name: 'fa-angle-down', tags: ['directional', 'arrow']},
    {name: 'fa-angle-left', tags: ['directional', 'arrow']},
    {name: 'fa-angle-right', tags: ['directional', 'arrow']},
    {name: 'fa-angle-up', tags: ['directional', 'arrow']},
    {name: 'fa-arrow-circle-down', tags: ['directional', 'arrow']},
    {name: 'fa-arrow-circle-left', tags: ['directional', 'arrow']},
    {name: 'fa-arrow-circle-right', tags: ['directional', 'arrow']},
    {name: 'fa-arrow-circle-up', tags: ['directional', 'arrow']},
    {name: 'fa-arrow-circle-o-down', tags: ['directional', 'arrow']},
    {name: 'fa-arrow-circle-o-left', tags: ['directional', 'arrow']},
    {name: 'fa-arrow-circle-o-right', tags: ['directional', 'arrow']},
    {name: 'fa-arrow-circle-o-up', tags: ['directional', 'arrow']},
    {name: 'fa-arrow-down', tags: ['directional', 'arrow']},
    {name: 'fa-arrow-left', tags: ['directional', 'arrow']},
    {name: 'fa-arrow-right', tags: ['directional', 'arrow']},
    {name: 'fa-arrow-up', tags: ['directional', 'arrow']},
    {name: 'fa-caret-down', tags: ['directional', 'arrow']},
    {name: 'fa-caret-left', tags: ['directional', 'arrow']},
    {name: 'fa-caret-right', tags: ['directional', 'arrow']},
    {name: 'fa-caret-up', tags: ['directional', 'arrow']},
    {name: 'fa-caret-square-o-down', tags: ['directional', 'arrow', 'web']},
    {name: 'fa-caret-square-o-left', tags: ['directional', 'arrow', 'web']},
    {name: 'fa-caret-square-o-right', tags: ['directional', 'arrow', 'web']},
    {name: 'fa-caret-square-o-up', tags: ['directional', 'arrow', 'web']},
    {name: 'fa-chevron-circle-down', tags: ['directional', 'arrow']},
    {name: 'fa-chevron-circle-left', tags: ['directional', 'arrow']},
    {name: 'fa-chevron-circle-right', tags: ['directional', 'arrow']},
    {name: 'fa-chevron-circle-up', tags: ['directional', 'arrow']},
    {name: 'fa-chevron-down', tags: ['directional', 'arrow']},
    {name: 'fa-chevron-left', tags: ['directional', 'arrow']},
    {name: 'fa-chevron-right', tags: ['directional', 'arrow']},
    {name: 'fa-chevron-up', tags: ['directional', 'arrow']},
    {name: 'fa-hand-o-down', tags: ['directional', 'arrow']},
    {name: 'fa-hand-o-left', tags: ['directional', 'arrow']},
    {name: 'fa-hand-o-right', tags: ['directional', 'arrow']},
    {name: 'fa-hand-o-up', tags: ['directional', 'arrow']},
    {name: 'fa-long-arrow-down', tags: ['directional', 'arrow']},
    {name: 'fa-long-arrow-left', tags: ['directional', 'arrow']},
    {name: 'fa-long-arrow-right', tags: ['directional', 'arrow']},
    {name: 'fa-long-arrow-up', tags: ['directional', 'arrow']},

    {name: 'fa-compress', tags: ['video']},
    {name: 'fa-expand', tags: ['video']},
    {name: 'fa-play', tags: ['video']},
    {name: 'fa-play-circle', tags: ['video']},
    {name: 'fa-play-circle-o', tags: ['video']},
    {name: 'fa-pause', tags: ['video']},
    {name: 'fa-fast-backward', tags: ['video']},
    {name: 'fa-backward', tags: ['video']},
    {name: 'fa-step-backward', tags: ['video']},
    {name: 'fa-forward', tags: ['video']},
    {name: 'fa-step-forward', tags: ['video']},
    {name: 'fa-fast-forward', tags: ['video']},
    {name: 'fa-stop', tags: ['video']},
    {name: 'fa-youtube-play', tags: ['video', 'social']},
    {name: 'fa-eject', tags: ['video']},

    {name: 'fa-credit-card', tags: ['payment', 'web']},
    {name: 'fa-cc-amex', tags: ['payment', 'brand']},
    {name: 'fa-cc-discover', tags: ['payment', 'brand']},
    {name: 'fa-cc-mastercard', tags: ['payment', 'brand']},
    {name: 'fa-cc-paypal', tags: ['payment', 'brand']},
    {name: 'fa-cc-stripe', tags: ['payment', 'brand']},
    {name: 'fa-cc-visa', tags: ['payment', 'brand']},
    {name: 'fa-google-wallet', tags: ['payment', 'brand']},
    {name: 'fa-paypal', tags: ['payment', 'brand']},

    {name: 'fa-ambulance', tags: ['medical']},
    {name: 'fa-h-square', tags: ['medical']},
    {name: 'fa-hospital-o', tags: ['medical']},
    {name: 'fa-medkit', tags: ['medical']},
    {name: 'fa-stethoscope', tags: ['medical']},
    {name: 'fa-user-md', tags: ['medical']},
    {name: 'fa-wheelchair', tags: ['medical', 'web']},

    {name: 'fa-adjust', tags: ['web']},
    {name: 'fa-anchor', tags: ['web']},
    {name: 'fa-archive', tags: ['web']},
    {name: 'fa-asterisk', tags: ['web']},
    {name: 'fa-at', tags: ['web']},
    {name: 'fa-ban', tags: ['web']},
    {name: 'fa-barcode', tags: ['web']},
    {name: 'fa-bars', tags: ['web']},
    {name: 'fa-beer', tags: ['web']},
    {name: 'fa-bell', tags: ['web']},
    {name: 'fa-bell-o', tags: ['web']},
    {name: 'fa-bell-slash', tags: ['web']},
    {name: 'fa-bell-slash-o', tags: ['web']},
    {name: 'fa-bicycle', tags: ['web']},
    {name: 'fa-binoculars', tags: ['web']},
    {name: 'fa-birthday-cake', tags: ['web']},
    {name: 'fa-bolt', tags: ['web']},
    {name: 'fa-bomb', tags: ['web']},
    {name: 'fa-book', tags: ['web']},
    {name: 'fa-bookmark', tags: ['web']},
    {name: 'fa-bookmark-o', tags: ['web']},
    {name: 'fa-briefcase', tags: ['web']},
    {name: 'fa-bug', tags: ['web']},
    {name: 'fa-building', tags: ['web']},
    {name: 'fa-building-o', tags: ['web']},
    {name: 'fa-bullhorn', tags: ['web']},
    {name: 'fa-bullseye', tags: ['web']},
    {name: 'fa-bus', tags: ['web']},
    {name: 'fa-calculator', tags: ['web']},
    {name: 'fa-calendar', tags: ['web']},
    {name: 'fa-calendar-o', tags: ['web']},
    {name: 'fa-camera', tags: ['web']},
    {name: 'fa-camera-retro', tags: ['web']},
    {name: 'fa-car', tags: ['web']},
    {name: 'fa-cc', tags: ['web']},
    {name: 'fa-certificate', tags: ['web']},
    {name: 'fa-check', tags: ['web']},
    {name: 'fa-check-circle', tags: ['web']},
    {name: 'fa-check-circle-o', tags: ['web']},
    {name: 'fa-child', tags: ['web']},
    {name: 'fa-circle-thin', tags: ['web']},
    {name: 'fa-clock-o', tags: ['web']},
    {name: 'fa-cloud', tags: ['web']},
    {name: 'fa-cloud-download', tags: ['web']},
    {name: 'fa-cloud-upload', tags: ['web']},
    {name: 'fa-code', tags: ['web']},
    {name: 'fa-code-fork', tags: ['web']},
    {name: 'fa-coffee', tags: ['web']},
    {name: 'fa-cogs', tags: ['web']},
    {name: 'fa-comment', tags: ['web']},
    {name: 'fa-comment-o', tags: ['web']},
    {name: 'fa-comments', tags: ['web']},
    {name: 'fa-comments-o', tags: ['web']},
    {name: 'fa-compass', tags: ['web']},
    {name: 'fa-copyright', tags: ['web']},
    {name: 'fa-crop', tags: ['web']},
    {name: 'fa-crosshairs', tags: ['web']},
    {name: 'fa-cube', tags: ['web']},
    {name: 'fa-cubes', tags: ['web']},
    {name: 'fa-cutlery', tags: ['web']},
    {name: 'fa-database', tags: ['web']},
    {name: 'fa-desktop', tags: ['web']},
    {name: 'fa-download', tags: ['web']},
    {name: 'fa-ellipsis-h', tags: ['web']},
    {name: 'fa-ellipsis-v', tags: ['web']},
    {name: 'fa-envelope', tags: ['web']},
    {name: 'fa-envelope-o', tags: ['web']},
    {name: 'fa-envelope-square', tags: ['web']},
    {name: 'fa-exchange', tags: ['web']},
    {name: 'fa-exclamation', tags: ['web']},
    {name: 'fa-exclamation-circle', tags: ['web']},
    {name: 'fa-exclamation-triangle', tags: ['web']},
    {name: 'fa-external-link', tags: ['web']},
    {name: 'fa-external-link-square', tags: ['web']},
    {name: 'fa-eye', tags: ['web']},
    {name: 'fa-eye-slash', tags: ['web']},
    {name: 'fa-eyedropper', tags: ['web']},
    {name: 'fa-fax', tags: ['web']},
    {name: 'fa-female', tags: ['web']},
    {name: 'fa-fighter-jet', tags: ['web']},
    {name: 'fa-film', tags: ['web']},
    {name: 'fa-filter', tags: ['web']},
    {name: 'fa-fire', tags: ['web']},
    {name: 'fa-fire-extinguisher', tags: ['web']},
    {name: 'fa-flag', tags: ['web']},
    {name: 'fa-flag-checkered', tags: ['web']},
    {name: 'fa-flag-o', tags: ['web']},
    {name: 'fa-flask', tags: ['web']},
    {name: 'fa-folder', tags: ['web']},
    {name: 'fa-folder-o', tags: ['web']},
    {name: 'fa-folder-open', tags: ['web']},
    {name: 'fa-folder-open-o', tags: ['web']},
    {name: 'fa-frown-o', tags: ['web']},
    {name: 'fa-futbol-o', tags: ['web']},
    {name: 'fa-gamepad', tags: ['web']},
    {name: 'fa-gavel', tags: ['web']},
    {name: 'fa-gift', tags: ['web']},
    {name: 'fa-glass', tags: ['web']},
    {name: 'fa-globe', tags: ['web']},
    {name: 'fa-graduation-cap', tags: ['web']},
    {name: 'fa-hdd-o', tags: ['web']},
    {name: 'fa-headphones', tags: ['web']},
    {name: 'fa-heart', tags: ['web']},
    {name: 'fa-heart-o', tags: ['web']},
    {name: 'fa-history', tags: ['web']},
    {name: 'fa-home', tags: ['web']},
    {name: 'fa-inbox', tags: ['web']},
    {name: 'fa-info', tags: ['web']},
    {name: 'fa-info-circle', tags: ['web']},
    {name: 'fa-key', tags: ['web']},
    {name: 'fa-keyboard-o', tags: ['web']},
    {name: 'fa-language', tags: ['web']},
    {name: 'fa-laptop', tags: ['web']},
    {name: 'fa-leaf', tags: ['web']},
    {name: 'fa-lemon-o', tags: ['web']},
    {name: 'fa-level-down', tags: ['web']},
    {name: 'fa-level-up', tags: ['web']},
    {name: 'fa-life-ring', tags: ['web']},
    {name: 'fa-lightbulb-o', tags: ['web']},
    {name: 'fa-location-arrow', tags: ['web']},
    {name: 'fa-lock', tags: ['web']},
    {name: 'fa-magic', tags: ['web']},
    {name: 'fa-magnet', tags: ['web']},
    {name: 'fa-male', tags: ['web']},
    {name: 'fa-map-marker', tags: ['web']},
    {name: 'fa-meh-o', tags: ['web']},
    {name: 'fa-microphone', tags: ['web']},
    {name: 'fa-microphone-slash', tags: ['web']},
    {name: 'fa-mobile', tags: ['web']},
    {name: 'fa-moon-o', tags: ['web']},
    {name: 'fa-music', tags: ['web']},
    {name: 'fa-newspaper-o', tags: ['web']},
    {name: 'fa-paint-brush', tags: ['web']},
    {name: 'fa-paper-plane', tags: ['web']},
    {name: 'fa-paper-plane-o', tags: ['web']},
    {name: 'fa-paw', tags: ['web']},
    {name: 'fa-pencil', tags: ['web']},
    {name: 'fa-pencil-square', tags: ['web']},
    {name: 'fa-pencil-square-o', tags: ['web']},
    {name: 'fa-phone', tags: ['web']},
    {name: 'fa-phone-square', tags: ['web']},
    {name: 'fa-picture-o', tags: ['web']},
    {name: 'fa-plane', tags: ['web']},
    {name: 'fa-plug', tags: ['web']},
    {name: 'fa-power-off', tags: ['web']},
    {name: 'fa-print', tags: ['web']},
    {name: 'fa-puzzle-piece', tags: ['web']},
    {name: 'fa-qrcode', tags: ['web']},
    {name: 'fa-question', tags: ['web']},
    {name: 'fa-question-circle', tags: ['web']},
    {name: 'fa-quote-left', tags: ['web']},
    {name: 'fa-quote-right', tags: ['web']},
    {name: 'fa-random', tags: ['web']},
    {name: 'fa-recycle', tags: ['web']},
    {name: 'fa-reply', tags: ['web']},
    {name: 'fa-reply-all', tags: ['web']},
    {name: 'fa-retweet', tags: ['web']},
    {name: 'fa-road', tags: ['web']},
    {name: 'fa-rocket', tags: ['web']},
    {name: 'fa-rss', tags: ['web']},
    {name: 'fa-rss-square', tags: ['web']},
    {name: 'fa-search', tags: ['web']},
    {name: 'fa-search-minus', tags: ['web']},
    {name: 'fa-search-plus', tags: ['web']},
    {name: 'fa-share', tags: ['web']},
    {name: 'fa-share-square', tags: ['web']},
    {name: 'fa-share-square-o', tags: ['web']},
    {name: 'fa-shield', tags: ['web']},
    {name: 'fa-shopping-cart', tags: ['web']},
    {name: 'fa-sign-in', tags: ['web']},
    {name: 'fa-sign-out', tags: ['web']},
    {name: 'fa-signal', tags: ['web']},
    {name: 'fa-sitemap', tags: ['web']},
    {name: 'fa-sliders', tags: ['web']},
    {name: 'fa-smile-o', tags: ['web']},
    {name: 'fa-sort', tags: ['web']},
    {name: 'fa-sort-asc', tags: ['web']},
    {name: 'fa-sort-desc', tags: ['web']},
    {name: 'fa-sort-amount-asc', tags: ['web']},
    {name: 'fa-sort-amount-desc', tags: ['web']},
    {name: 'fa-sort-alpha-asc', tags: ['web']},
    {name: 'fa-sort-alpha-desc', tags: ['web']},
    {name: 'fa-sort-numeric-asc', tags: ['web']},
    {name: 'fa-sort-numeric-desc', tags: ['web']},
    {name: 'fa-space-shuttle', tags: ['web']},
    {name: 'fa-spoon', tags: ['web']},
    {name: 'fa-star', tags: ['web']},
    {name: 'fa-star-o', tags: ['web']},
    {name: 'fa-star-half-o', tags: ['web']},
    {name: 'fa-star-half', tags: ['web']},
    {name: 'fa-suitcase', tags: ['web']},
    {name: 'fa-sun-o', tags: ['web']},
    {name: 'fa-tablet', tags: ['web']},
    {name: 'fa-tachometer', tags: ['web']},
    {name: 'fa-tag', tags: ['web']},
    {name: 'fa-tags', tags: ['web']},
    {name: 'fa-tasks', tags: ['web']},
    {name: 'fa-taxi', tags: ['web']},
    {name: 'fa-terminal', tags: ['web']},
    {name: 'fa-thumb-tack', tags: ['web']},
    {name: 'fa-thumbs-down', tags: ['web']},
    {name: 'fa-thumbs-up', tags: ['web']},
    {name: 'fa-thumbs-o-down', tags: ['web']},
    {name: 'fa-thumbs-o-up', tags: ['web']},
    {name: 'fa-ticket', tags: ['web']},
    {name: 'fa-times', tags: ['web']},
    {name: 'fa-times-circle', tags: ['web']},
    {name: 'fa-times-circle-o', tags: ['web']},
    {name: 'fa-tint', tags: ['web']},
    {name: 'fa-toggle-off', tags: ['web']},
    {name: 'fa-toggle-on', tags: ['web']},
    {name: 'fa-trash', tags: ['web']},
    {name: 'fa-trash-o', tags: ['web']},
    {name: 'fa-tree', tags: ['web']},
    {name: 'fa-trophy', tags: ['web']},
    {name: 'fa-truck', tags: ['web']},
    {name: 'fa-tty', tags: ['web']},
    {name: 'fa-umbrella', tags: ['web']},
    {name: 'fa-university', tags: ['web']},
    {name: 'fa-unlock', tags: ['web']},
    {name: 'fa-unlock-alt', tags: ['web']},
    {name: 'fa-upload', tags: ['web']},
    {name: 'fa-user', tags: ['web']},
    {name: 'fa-users', tags: ['web']},
    {name: 'fa-video-camera', tags: ['web']},
    {name: 'fa-volume-down', tags: ['web']},
    {name: 'fa-volume-off', tags: ['web']},
    {name: 'fa-volume-up', tags: ['web']},
    {name: 'fa-wifi', tags: ['web']},
    {name: 'fa-wrench', tags: ['web']},

    {name: 'fa-adn', tags: ['social']},
    {name: 'fa-android', tags: ['social']},
    {name: 'fa-angellist', tags: ['social']},
    {name: 'fa-apple', tags: ['social']},
    {name: 'fa-behance', tags: ['social']},
    {name: 'fa-behance-square', tags: ['social']},
    {name: 'fa-bitbucket', tags: ['social']},
    {name: 'fa-bitbucket-square', tags: ['social']},
    {name: 'fa-codepen', tags: ['social']},
    {name: 'fa-css3', tags: ['social']},
    {name: 'fa-delicious', tags: ['social']},
    {name: 'fa-deviantart', tags: ['social']},
    {name: 'fa-digg', tags: ['social']},
    {name: 'fa-dribbble', tags: ['social']},
    {name: 'fa-dropbox', tags: ['social']},
    {name: 'fa-drupal', tags: ['social']},
    {name: 'fa-empire', tags: ['social']},
    {name: 'fa-facebook', tags: ['social']},
    {name: 'fa-facebook-square', tags: ['social']},
    {name: 'fa-flickr', tags: ['social']},
    {name: 'fa-foursquare', tags: ['social']},
    {name: 'fa-git', tags: ['social']},
    {name: 'fa-git-square', tags: ['social']},
    {name: 'fa-github', tags: ['social']},
    {name: 'fa-github-alt', tags: ['social']},
    {name: 'fa-github-square', tags: ['social']},
    {name: 'fa-gittip', tags: ['social']},
    {name: 'fa-google', tags: ['social']},
    {name: 'fa-google-plus', tags: ['social']},
    {name: 'fa-google-plus-square', tags: ['social']},
    {name: 'fa-hacker-news', tags: ['social']},
    {name: 'fa-html5', tags: ['social']},
    {name: 'fa-instagram', tags: ['social']},
    {name: 'fa-ioxhost', tags: ['social']},
    {name: 'fa-joomla', tags: ['social']},
    {name: 'fa-jsfiddle', tags: ['social']},
    {name: 'fa-lastfm', tags: ['social']},
    {name: 'fa-lastfm-square', tags: ['social']},
    {name: 'fa-linkedin', tags: ['social']},
    {name: 'fa-linkedin-square', tags: ['social']},
    {name: 'fa-linux', tags: ['social']},
    {name: 'fa-maxcdn', tags: ['social']},
    {name: 'fa-meanpath', tags: ['social']},
    {name: 'fa-openid', tags: ['social']},
    {name: 'fa-pagelines', tags: ['social']},
    {name: 'fa-pied-piper', tags: ['social']},
    {name: 'fa-pied-piper-alt', tags: ['social']},
    {name: 'fa-pinterest', tags: ['social']},
    {name: 'fa-pinterest-square', tags: ['social']},
    {name: 'fa-qq', tags: ['social']},
    {name: 'fa-rebel', tags: ['social']},
    {name: 'fa-reddit', tags: ['social']},
    {name: 'fa-reddit-square', tags: ['social']},
    {name: 'fa-renren', tags: ['social']},
    {name: 'fa-share-alt', tags: ['social']},
    {name: 'fa-share-alt-square', tags: ['social']},
    {name: 'fa-skype', tags: ['social']},
    {name: 'fa-slack', tags: ['social']},
    {name: 'fa-slideshare', tags: ['social']},
    {name: 'fa-soundcloud', tags: ['social']},
    {name: 'fa-spotify', tags: ['social']},
    {name: 'fa-stack-exchange', tags: ['social']},
    {name: 'fa-stack-overflow', tags: ['social']},
    {name: 'fa-steam', tags: ['social']},
    {name: 'fa-steam-square', tags: ['social']},
    {name: 'fa-stumbleupon', tags: ['social']},
    {name: 'fa-stumbleupon-circle', tags: ['social']},
    {name: 'fa-tencent-weibo', tags: ['social']},
    {name: 'fa-trello', tags: ['social']},
    {name: 'fa-tumblr', tags: ['social']},
    {name: 'fa-tumblr-square', tags: ['social']},
    {name: 'fa-twitch', tags: ['social']},
    {name: 'fa-twitter', tags: ['social']},
    {name: 'fa-twitter-square', tags: ['social']},
    {name: 'fa-vimeo-square', tags: ['social']},
    {name: 'fa-vine', tags: ['social']},
    {name: 'fa-vk', tags: ['social']},
    {name: 'fa-weibo', tags: ['social']},
    {name: 'fa-weixin', tags: ['social']},
    {name: 'fa-windows', tags: ['social']},
    {name: 'fa-wordpress', tags: ['social']},
    {name: 'fa-xing', tags: ['social']},
    {name: 'fa-xing-square', tags: ['social']},
    {name: 'fa-yahoo', tags: ['social']},
    {name: 'fa-yelp', tags: ['social']},
    {name: 'fa-youtube', tags: ['social']},
    {name: 'fa-youtube-square', tags: ['social']}
  ];
  var service = {
    all: all,
    getUrl: function(icon){
      return 'http://fortawesome.github.io/Font-Awesome/icon/'+icon.name.replace('fa-', '')+'/';
    }
  };

  return service;
});
