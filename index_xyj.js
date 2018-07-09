var app = new Vue ({
    el:'#main',
    data:{
        status:"注册",
        username:"",
        password:"",
        currentUser:0,
        input:"",
        classObject:{
            toLeft:false,
            toRight:false
        },
        todoList:[]
    },
    methods: {
        changeStatus: function (flag) {
            if (flag){
                this.status = "登录"
            }
            else {
                this.status = "注册"
            }
        },
        submit:function () {
            if(this.username&&this.password){
                this.currentUser = 1;
            }

        },
        toLeft:function () {
            let line = document.getElementsByClassName("line")[0];
            this.classObject.toLeft = true;
            this.classObject.toRight=false;
        },
        toRight:function () {
            let line = document.getElementsByClassName("line")[0];
            this.classObject.toLeft = false;
            this.classObject.toRight=true;
        },
        addTodo:function () {
            this.todoList.push(this.input);
            this.input = "";
        }

    }
})