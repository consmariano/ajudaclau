import React from 'react';

// const pius = new XMLHttpRequest();
// pius.onreadystatechange = (e) => {
//     if (pius.readyState !== 4) {
//         return;
//     }
//     if (pius.status === 200) {
//         console.log('success', pius.responseText);
//     } else {
//         console.warn('error');
//     }
// };

// request.open('POST', 'http://piupiuwer.polijr.com.br/pius/', true);
// request.send();

function adicionaPiu({id, texto}) {
    return fetch(
        'http://piupiuwer.polijr.com.br/usuarios/', 
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               'id': id, 
               'texto': texto
            })
        }
    )
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        if (hasError(json)) {
            return 'Insira os dados corretamente.';
        } else {
            return null;
        }
    })
    .catch((error) => {
        return "Erro de conexão";
        console.log(error)
    })
}

// export default function enviaPiu() {

//     const [ NewPiu, setNewPiu ] = useState('')
//     const [ PiuInfo, setPiuInfo ] = useState('')
//     const [ PiuUsername, setPiuUsername ] = useState('')
//     const [ PiuImage, setPiuImage ] = useState('')
//     const [ piuText, setPiuText ] = useState('')


// }