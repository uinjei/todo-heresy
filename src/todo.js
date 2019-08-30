import Table from "./components/table";
import Box from "./components/box";
import userService from "./service/user-service";
export default {
    includes: {Table, Box},
    extends: 'div',
    oninit() {
        this.setAttribute('class','content');
    },
    render() {
        const columns = ['id', 'name', 'username'] 
        this.html`
            <Box><Table data="${{columns, populator:userService.findAll}}"/></Box>
        `;
    }
}