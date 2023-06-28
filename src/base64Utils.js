let encode = document.querySelector('#encode');
      let decode = document.querySelector('#decode');
      let output = document.querySelector('textarea');
      let input = document.querySelector('input');
      let textarea = document.querySelector('textarea');
      encode.addEventListener('click', () =>{
        output.value = btoa(output.value) ;
      });
      decode.addEventListener('click', () =>{
        output.value = atob(output.value) ;
      });
/// input files
input.addEventListener('change', () => {
    let files = input.files;
    if(files.length == 0) return;
    const file = files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        textarea.value = lines.join('\n');
    };
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file); 
    
});

function clearText() { //Text eraser text area
  document.getElementById("text").value = "";
}