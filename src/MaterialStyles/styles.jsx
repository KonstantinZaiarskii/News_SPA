import { createStyles, makeStyles } from "@mui/styles";
import { createTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => {
	const styleTheme = createTheme();

	return createStyles({
		header: {
			justifyContent: "space-between",
			flexWrap: "wrap",
		},
		burger: {
			display: " none",
			[styleTheme.breakpoints.down("sm")]: {
				display: "block",
			},
		},
		modal: {
			position: "absolute",
			top: 40,
			right: 0,
			width: 100,
			height: 200,
			backgroundColor: "#fff",
			textAlign: "center",
			border: " #000 1px solid",
		},
		linkActive: {
			color: " rgb(36, 36, 36)",
		},
		offer: {
			padding: " 70px 0 40px 0",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			textAlign: "center",
			width: `100%`,
			height: `100%`,
			[styleTheme.breakpoints.down("sm")]: {
				padding: " 170px 0 40px 0",
			},
		},
		nav: {
			display: "flex",
			gap: 20,
			[styleTheme.breakpoints.down("sm")]: {
				display: "none",
				position: "fixed",
			},
		},
		navModal: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-evenly",
			gap: 20,
			[styleTheme.breakpoints.up("sm")]: {
				display: "none",
			},
		},
		overlay: {
			position: "absolute",
			top: 0,
			left: 0,
			width: `100%`,
			height: `100%`,
			zIndex: 50,
			background: `rgb(41 47 47 / 50%)`,
			opacity: 1.1,
		},
		title: {
			marginBottom: styleTheme.spacing(6),
			textAlign: "center",
		},
		card: {
			display: "flex",
			flexWrap: "wrap",
			justifyContent: "center",
			gridGap: 10,
		},
		preloader: {
			margin: `0 auto`,
			textAlign: "center",
			display: "block",
		},
	});
});

export default useStyles;
