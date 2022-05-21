function getname() {
let name = prompt('请输入进入密码。');
 if(name === "你是神秘天王") {
    localStorage.setItem('name', name);
  } else {
    getname();
  }
}

getname();