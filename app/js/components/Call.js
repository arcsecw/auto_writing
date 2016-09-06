import {myConfig} from './config'
var  url = myConfig.fetch_url
module.exports = {
    m_get(apipath,data,cb) {
        url = url+apipath+'?'
        for (let k of Object.keys(data)){
            url = url + k + '=' + data[k]
        }
        fetch(url,{
            mode:'cors'
        })
            .then(checkStatus)
            .then(res => {
                return res.json();
            })
            .then(data => {
                cb(data)
            })
            .catch(error => {
                console.log('Request failed: ', error)
            });

    },
    m_post(apipath,form,cb) {
        url = url+apipath       
        //var f = document.getElementById('myform');
        //var form = new FormData(f)
        //for (let k of Object.keys(data)){
        //    form.append(k,data[k])
        //}
        //form.append("userfile", fileInputElement.files[0]);
                
        fetch(url,{
            method:'POST',
            body:form,
            mode:'cors'
        })
            .then(checkStatus)
            .then(res => {
                return res.json();
            })
            .then(data => {
                cb(data)
            })
            .catch(error => {
                console.log('Request failed: ', error)
            });

    }
}
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}


