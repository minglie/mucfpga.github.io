var M_this={};
class MingCode extends React.Component {

    constructor(props){
        super(props);
        this.state={
           content:""
        }

        M_this=this;
    }

    componentDidMount() {

        console.log(this.props.url)


        fetch(this.props.url, {
            method: 'GET',
            mode: 'cors'}
        ).then((res)=>{return res.text()}).then((d)=>M_this.setState({content:d})).catch((error) => {
            console.error(error)
        });


        let container=this.refs.container;
        require.config({
            baseUrl: '../codeEdit/', paths: { 'vs': 'min/vs' }});
        require(['vs/editor/editor.main'], function() {
            var editor = monaco.editor.create(container, {
                value: [
                    M_this.state.content
                ].join('\n'),
                language: M_this.props.language,
                theme:'vs-dark',
                automaticLayout:true,
                scrollbar: {
                    useShadows:false,
                    vertical:'visible',
                    horizontal:'visible',
                    horizontalSliderSize:5,
                    verticalSliderSize:5,
                    horizontalScrollbarSize:15,
                    verticalScrollbarSize:15,
                },
                quickSuggestions:true,
                overviewRulerBorder:true,
                minimap: {
                    enabled:false
                }
            });

            M.editor=editor;
        });
    }

    render() {
        return(
        <div>
            <div ref="container"  style= {{ width:"100%",height:"2000px",float:"left", border:"1px solid grey" }}></div>
        </div>
        )
    }
}






