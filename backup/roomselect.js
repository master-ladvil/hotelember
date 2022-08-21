import Controller from '@ember/controller';
import {action} from '@ember/object';
import {service} from '@ember/service';
import {tracked} from '@glimmer/tracking';
import $ from 'jquery';


export default class RoomselectController extends Controller {
    @service router;
    @tracked obj = null  ;
    @tracked price =0;
    get res(){
        var dis = this;
        const mobile = "123123123";
        $.ajax({
            url:'My',
            method : 'GET',
            dataType:'json',
            data : {mobile:mobile},
            success:function(response){
                console.log(response);
                console.log(response[0].PRICE);
                dis.price = response[0].PRICE;
                dis.obj = response[0];
                
                return response[0];
            },
            error: function(xhr,status,error){
                var errorMessage = xhr.status + ": " + xhr.statusText;
                alert("error " + errorMessage);
            }
        })
    }

    /*get ress(){
        var dis = this;
        const mobile = "123123123";
        $.ajax({
            url:'My',
            method : 'GET',
            data : {mobile:mobile},
            success:function(response){
                console.log(response);
                return(response[0].CAPACITY);
                /*alert("post success");
                return response[0];*//*
            },
            error: function(xhr,status,error){
                var errorMessage = xhr.status + ": " + xhr.statusText;
                alert("error " + errorMessage);
            }
        })
    }*/
    
}
