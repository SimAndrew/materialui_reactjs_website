import React from "react";
import {Link} from "react-router-dom";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import analytics from "../assets/analytics.svg";
import seo from  "../assets/seo.svg";
import outreach from "../assets/outreach.svg";
import ecommerce from "../assets/ecommerce.svg";

import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles(theme => ({
    heading: {
        maxWidth: "40em"
    },
    arrowContainer: {
        marginTop: "0.5em"
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
        }
    },
    paragraphContainer: {
        maxWidth: "30em"
    }
}));

export default function Websites(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <Grid container direction="column">
            <Grid item container direction="row" justify={matchesMD ? "center" : undefined} className={classes.rowContainer} style={{marginTop: matchesXS ? "1em" : "2em"}}>

                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{marginRight: "1em", marginLeft: "-3.5em"}}>
                        <IconButton style={{backgroundColor: "transparent"}} component={Link} to="/mobileapps" onClick={() => props.setSelectedIndex(2)}>
                            <img src={backArrow} alt="Back IOS/Android App Development" />
                        </IconButton>
                    </Grid>
                </Hidden>

                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h2">Website Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis distinctio est
                            fugiat iste laudantium quae quod reprehenderit. Nesciunt.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at cupiditate
                            esse illum, natus nesciunt nulla obcaecati perspiciatis, quam quidem quis ratione
                            recusandae rem similique temporibus, vel voluptatem voluptatibus. A adipisci deserunt
                            doloribus eos, et iure laborum molestiae nam porro, possimus quia repellendus
                            reprehenderit saepe sint ullam unde velit voluptatibus?
                        </Typography>
                    </Grid>
                </Grid>

                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton style={{backgroundColor: "transparent"}} component={Link} to="/services" onClick={() => props.setSelectedIndex(0)}>
                            <img src={forwardArrow} alt="Forward to Services Page" />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>

            <Grid item container direction={matchesSM ? "column" : "row"} alignItems="center" className={classes.rowContainer} style={{marginTop: "15em"}}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesSM ? "center" : undefined} variant="h4" gutterBottom>Analytics</Typography>
                        </Grid>
                        <Grid item>
                            <img src={analytics} style={{marginLeft: "-2.75em"}} alt="graph with magnifying glass"/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item className={classes.paragraphContainer}>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam, asperiores autem blanditiis,
                        dolore est explicabo hic impedit inventore magnam modi molestias non, quia quod recusandae repellat
                        sequi unde velit?
                    </Typography>
                </Grid>
            </Grid>

            <Grid item container direction={matchesSM ? "column" : "row"} alignItems="center" justify="flex-end" className={classes.rowContainer} style={{marginBottom: "15em", marginTop: "15em"}}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesSM ? "center" : undefined} align="center" variant="h4" gutterBottom>E-Commerce</Typography>
                        </Grid>
                        <Grid item>
                            <img src={ecommerce} alt="earth"/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item style={{marginLeft: matchesSM ? 0 : "1em"}} className={classes.paragraphContainer}>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda culpa ducimus earum
                        laudantium molestiae quisquam sapiente sit velit voluptates.
                    </Typography>
                </Grid>
            </Grid>

            <Grid item container direction={matchesSM ? "column" : "row"} alignItems="center" className={classes.rowContainer}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesSM ? "center" : undefined} variant="h4" gutterBottom>Outreach</Typography>
                        </Grid>
                        <Grid item>
                            <img src={outreach} alt="megaphone"/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item style={{marginLeft: matchesSM ? 0 : "1em"}} className={classes.paragraphContainer}>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam, asperiores autem blanditiis,
                        dolore est explicabo hic impedit inventore magnam modi molestias non, quia quod recusandae repellat
                        sequi unde velit?
                    </Typography>
                </Grid>
            </Grid>

            <Grid item container direction={matchesSM ? "column" : "row"} alignItems="center" justify="flex-end" className={classes.rowContainer} style={{marginTop: "15em", marginBottom: "15em"}}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>Search Engine <br/> Optimization</Typography>
                        </Grid>
                        <Grid item>
                            <img src={seo} alt="website on the winners podium"/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item style={{marginLeft: matchesSM ? 0 : "1em"}} className={classes.paragraphContainer}>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta exercitationem
                        ipsam mollitia nihil quo sit tenetur, vero! Fugiat, non.
                    </Typography>
                </Grid>
            </Grid>

            <Grid item>
                <CallToAction setValue={props.setValue} />
            </Grid>

        </Grid>
    );
}
