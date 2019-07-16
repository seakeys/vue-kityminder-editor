<template>
    <div>
        <input @change="uploadFile($event)" type="file" id="upload-image" style="display:none">
        <button><label for="upload-image">添加图片</label></button>
        <button @click="minder.execCommand('Image', '')">删除图片</button>
    </div>
</template>
<script>
  import qiniu from 'qiniu'
  import * as qiniuJs from 'qiniu-js'
export default {
    data() {
        return {
            options:{
                scope: this.scope,
                deleteAfterDays: 1,
                returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}'
            },
            token:'',
            putExtra:{
                fname: "",
                params: {},
                mimeType: ["image/png", "image/jpeg", "image/gif"]
            },

        }
    },
    mounted() {
        var putPolicy = new qiniu.rs.PutPolicy(this.options);
        var mac = new qiniu.auth.digest.Mac(this.AccessKey, this.SecretKey);
        this.token = putPolicy.uploadToken(mac);
    },
    props:{
        minder:{
            type:Object,
            default: () => {}
        },
        AccessKey:{
            type:String,
            default:''
        },
        SecretKey:{
            type:String,
            default:''
        },
        Domain:{
            type:String,
            default:''
        },
        scope:{
            type:String,
            default:''
        }
    }, 
    methods:{
        uploadFile(e) {
            const file = e.target.files[0]
            if(file) {
                const key = Date.parse(new Date())+file.name
                this.putExtra.fname = key
                var config = { useCdnDomain: true, region: qiniuJs.region.z2, disableStatisticsReport: false, retryCount: 6};
                let observable = qiniuJs.upload(file, key, this.token, this.putExtra, config);
                observable.subscribe({
                    next: (res) => {},
                    error: (err) => {},
                    complete: (res) => {
                        this.minder.execCommand('Image',`${this.Domain}/${res.key}`,res.key)
                        e.target.value = ''
                    }
                })
            }
        }
    }
}
</script>
