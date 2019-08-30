import { html } from "heresy";

const Th = {
    extends: 'th',
    render() {
        const { column } = this.data;
        this.html`${column}`;
    }
}

const Td = {
    extends: 'td',
    render() {
        const { cell } = this.data;
        this.html`${cell}`;
    }
}

const THead = {
    extends: 'thead',
    includes: {Th},
    render() {
        const { columns } = this.data;
        this.html`
            <tr>
                ${columns.map(column => html`<Th data="${{column}}"/>`)}
            </tr>
        `;
    }
}

const TBody = {
    extends: 'tbody',
    includes: {Td},
    render() {
        const { rows } = this.data;
        this.html`
            ${rows.map(row =>html`
                <tr>
                    ${Object.values(row).map(cell => html`
                        <Td data="${{cell}}"/>
                    `)}
                </tr>
                
            `)}
        `;
    }
}

const Table = {
    extends: 'table',
    includes: {THead, TBody},
    oninit() {
        this.setAttribute('class', 'table');
        this.state = {
            loading: true,
            rows: []
        };

        const { populator } = this.data;

        populator()
            .then(json => {
                const data = json.results;
                this.state.loading = false;
                this.state.columns = Object.keys(data[0]);
                this.state.rows = data;
                this.render();
            })
            .catch(e => console.log('there was an error retrieving: ', e));
    },
    render() {
        const { loading, rows, columns } = this.state;
        //const { columns } = this.data;

        const loader = html`
            <span class="icon">
                <i class="fas fa-spinner fa-pulse"></i>
            </span>
            Loading please wait
        `;

        this.html`
            ${loading?loader:
                html`
                    <THead data="${{columns}}"/>
                    <TBody data="${{rows}}"/>
                `}
        `;
    }
}

export default Table;