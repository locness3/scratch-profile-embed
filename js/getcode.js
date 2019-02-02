var updateEmbedCode = function () {
    var embedCode = document.getElementById("embed-code"),
    width = document.getElementById("width-input").value,
    height = document.getElementById("height-input").value,
    username = document.getElementById("username-input").value,
    codeDemo = document.getElementById("code-demo");
    embedCode.textContent = "<iframe width='" + width.toString() + "' height='" + height.toString() + "' src='https://locness3.github.io/scratch-profile-embed/#" + username + "'></iframe>";
    codeDemo.innerHTML =  "<iframe width='" + width.toString() + "' height='" + height.toString() + "' src='/scratch-profile-embed/#" + username + "'></iframe>";
    codeDemo.style.width = width + "px";
};
updateEmbedCode();
