<script setup>
    import { ref } from 'vue';
    
    const welcome = 'Hello';
        const introduction = 'I am';
        let name = ref('Remon');
    
    
    const changeName = () => {
        name.value = 'Dee';
        console.log(name);
    }
    // console.log(welcome.length);
    // alert('remon')
    </script>
    
    <template>
        <div>{{ welcome + ' ' + introduction + ' ' + name + 'regel 1'}}</div>
        <!-- <button @click="changeName">Change Name</button> -->
        <input v-model="name" type="text">
    </template>
    