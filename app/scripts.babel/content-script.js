$(() => {

  const indexComp = new Index();
  const $container = $('<div class="container">');
  $container.append(indexComp.$el);
  $('body').append($container);

  onContentChange((mutations) => {
    indexComp.setModel(
      getHeaders()
    );
  });
});

function getHeaders() {
  return $('div[placeholder="Heading 1"]');
}

function onContentChange(callback){
  MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  const target = document.querySelector('.notion-frame');
  
  new MutationObserver(function(mutations) {
    callback(mutations);
  }).observe(target, {
    childList: true,
    subtree: true,
  });
}
