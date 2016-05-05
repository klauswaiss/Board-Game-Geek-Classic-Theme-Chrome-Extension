// Saves options to chrome.storage
function save_options() {
  var bgimage = document.getElementById('bggecbgimage').checked;
  chrome.storage.sync.set({
    showHeaderBackgroundImage: bgimage
  }, function() {
	  
  });
}

function restore_options() {
  chrome.storage.sync.get({
    showHeaderBackgroundImage: false
  }, function(items) {
    document.getElementById('bggecbgimage').checked = items.showHeaderBackgroundImage;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('bggecbgimage').addEventListener('change', save_options);