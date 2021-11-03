Vue.config.devtools = true;

//at content loaded
window.addEventListener('DOMContentLoaded',()=>{
    //instantiate vue app
    const vueApp = new Vue({
        //root selector
        el: '#v-root',
        //app variables
        data: {
            tasks: [
                {
                    description: 'Make shopping',
                    status: false,
                    taskColor: '#563d7c'
                }
            ],
            currentTask : undefined,
            selectedColor: '#563d7c'
        },
        methods: {
            addTask(){
                this.tasks.push({
                    description: this.currentTask,
                    status: false,
                    taskColor: this.selectedColor
                });
            },
            removeTask(indexToBeRemoved){
                this.tasks.splice(indexToBeRemoved, 1)
            },
            setTaskStatus(index){
                if(this.tasks[index].status)
                    this.tasks[index].status = false
                else
                    this.tasks[index].status = true
            }
        }
    })
})