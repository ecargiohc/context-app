const styles =  theme => ({
    main: {
        width: "auto", 
        display: "block", 
        marginLeft: theme.spacing.unit * 3, 
        marginRight: theme.spacing.unit * 3, 
        [theme.breakpoints.up("md")] : {
            width: 400, 
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    paper: {
        marginTop: theme.spacing.unit * 8, 
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
});
export default styles;