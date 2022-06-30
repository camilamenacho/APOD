document.querySelector("#pesquisar").addEventListener("click", () => {});

  $("#pesquisar").on ('click', function(e) { 
  const data  = $(`#data`).val() 
  
  $.ajax({
    
    url: `https://api.nasa.gov/planetary/apod?api_key=9VQyDiHfZumotqV5eL77piOVST3rd4QaXnvsZMn9&date=${data}`,
    type: 'GET',
    success: function (apod) {
      const infoImagem = $(".informacao");
      const imagem = $(".imagem")
      infoImagem.text(`${apod.explanation}`);

      const title = $(".title");
      title.text(`${apod.title}`);
      
      if(apod.media_type == 'image'){
       imagem.html(`<img class = 'img' src= "${apod.url}"/>`)
      }
      else{
        imagem.html(`<iframe class="img" src="${saida.url}?autoplay=1&mute=1"></iframe>`)
      }
     
          }, 
        }) 
     });