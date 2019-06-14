const getCookie = (name: any) => {
    const arrs = document.cookie.split('; ');
    for (const arr of arrs) {
        const arr2 = arr.split('=');
        if (arr2[0] === name) {
            return arr2[1];
        }
    }
    return '';
}
export class FetchHttp {

    post(url:any,body:any){
        document.cookie = 'SESSION=NGU5OWYwMzEtYzI1My00N2M2LWJlNTktNDY0NzdjYmI0NWZj';
        return fetch(url, {
            method: 'post',
            body:JSON.stringify(body),
            headers: {
                'os': 'Android',
                'osVersion':'4.4.4',
                'appVersion':'v5.3.1',
                'Accept': 'application/json;charset=UTF-8',
                'Content-Type': 'application/json',
                'user-agent':'IRENSHI_APP_AGENT',
                'irenshilocale':'zh_CN',
                'udid': '9d5e0d3a-e37c-37ba-815a-75f7fbe6e3cd',
                'appKey': 'com.irenshi.personneltreasure',
                'X-XSRF-TOKEN': getCookie('XSRF-TOKEN')
            },
        }).then(d => d.json())
    }
    get(url:any){
        document.cookie = 'SESSION=NGU5OWYwMzEtYzI1My00N2M2LWJlNTktNDY0NzdjYmI0NWZj';
        return fetch(url, {
            method: 'get',
            headers: {
                'os': 'Android',
                'osVersion':'4.4.4',
                'appVersion':'v5.3.1',
                'Accept': 'application/json;charset=UTF-8',
                'Content-Type': 'application/json',
                'user-agent':'IRENSHI_APP_AGENT',
                'irenshilocale':'zh_CN',
                'udid': '9d5e0d3a-e37c-37ba-815a-75f7fbe6e3cd',
                'appKey': 'com.irenshi.personneltreasure',
                'X-XSRF-TOKEN': getCookie('XSRF-TOKEN')
            },
        }).then(d => d.json())
    }
}
