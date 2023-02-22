const form = document.querySelector('form');
const input  = document.querySelector('.files')

  form.onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form);   
    const fileData = {
        name:formData.get('email'),
        pass:formData.get('password'),
        file:formData.get('file'),
        id:1
    }
    console.log(fileData)
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: fileData
      }).then((response)=>{
        if(response.status == 201){
            console.log(response);
            alert(`Ваши данные успешно отправились, status:${response.status}`);
        }else{
            alert(`Возникла ошибка при отправке данных, status:${response.status}`); 
        }
    })
  };