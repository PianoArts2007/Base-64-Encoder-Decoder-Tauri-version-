function downloadFile(filename, content) {
 
    const element = document.createElement('a');
    
   
    const blob = new Blob([content], { type: 'plain/text' });
  
     
    const fileUrl = URL.createObjectURL(blob);
    
    
    element.setAttribute('href', fileUrl); //file location
    element.setAttribute('download', filename); // file name
    element.style.display = 'none';
    
     
    document.body.appendChild(element);
    element.click();
    
    
    document.body.removeChild(element);
  };
  
  window.onload = () => {
    document.getElementById('FileDownload').
    addEventListener('click', e => {
      
   
      //const filename = document.getElementById('filename').value;
      const filename = "blank"
      
    
      const content = document.getElementById('text').value;
      
   
      if (filename && content) {
        downloadFile(filename, content);
      }
    });
  };