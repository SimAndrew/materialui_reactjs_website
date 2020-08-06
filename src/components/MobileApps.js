import React from "react";
import Lottie from "react-lottie";
import {Link} from "react-router-dom";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import swiss from "../assets/swissKnife.svg";
import access from "../assets/extendAccess.svg";
import engagement from "../assets/increaseEngagement.svg";

import integrationAnimation from "../animations/integrationAnimation/data.json"

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
    }
}));

export default function MobileApps(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: integrationAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container direction="column">

            <Grid item container direction="row" justify={matchesMD ? "center" : undefined} className={classes.rowContainer} style={{marginTop: matchesXS ? "1em" : "2em"}}>

                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{marginRight: "1em", marginLeft: "-3.5em"}}>
                        <IconButton style={{backgroundColor: "transparent"}} component={Link} to="/customsoftware" onClick={() => props.setSelectedIndex(1)}>
                            <img src={backArrow} alt="Back to Custom Software Development Page" />
                        </IconButton>
                    </Grid>
                </Hidden>

                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h2">IOS/Android App Development</Typography>
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
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </Typography>
                    </Grid>
                </Grid>

                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton style={{backgroundColor: "transparent"}} component={Link} to="/websites" onClick={() => props.setSelectedIndex(3)}>
                            <img src={forwardArrow} alt="Website Development Page" />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>

            <Grid item container direction={matchesSM ? "column" : "row"} style={{marginTop: "15em", marginBottom: "15em"}} className={classes.rowContainer}>
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : undefined} variant="h4" gutterBottom>Integration</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur dolorum eius et fuga
                            in itaque iusto sit vel. Aut maxime quia quisquam quo recusandae repellat reprehenderit sint
                            vel voluptate!
                        </Typography>
                        <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur dolorum eius et fuga
                            in itaque iusto sit vel. Aut maxime quia quisquam quo recusandae repellat reprehenderit sint
                            vel voluptate!
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item md>
                    <Lottie options={defaultOptions} isStopped={true} style={{maxWidth: "20em"}} />
                </Grid>

                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : "right"} variant="h4" gutterBottom>Simultaneous Platform Support</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : "right"} variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur dolorum eius et fuga
                            in itaque iusto sit vel. Aut maxime quia quisquam quo recusandae repellat reprehenderit sint
                            vel voluptate!
                        </Typography>
                        <Typography align={matchesSM ? "center" : "right"} variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur dolorum eius et fuga
                            in itaque iusto sit vel. Aut maxime quia quisquam quo recusandae repellat reprehenderit sint
                            vel voluptate!
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{marginBottom: "15em"}}>
                <Grid item container direction="column" alignItems="center" md>
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>Extend Functionality</Typography>
                    </Grid>
                    <Grid item>
                        <img src={swiss} alt="swiss army knife" />
                    </Grid>
                </Grid>

                <Grid item container direction="column" alignItems="center" md style={{marginTop: matchesMD ? "10em" : 0, marginBottom: matchesMD ? "10em" : 0}}>
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>Extend Access</Typography>
                    </Grid>
                    <Grid item>
                        <img src={access} alt="tear-one-off sign" style={{maxWidth: matchesXS ? "20em" : "28em"}} />
                    </Grid>
                </Grid>

                <Grid item container direction="column" alignItems="center" md>
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>Increase Engagement</Typography>
                    </Grid>
                    <Grid item>
                        <img src={engagement} alt="app with notification" />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <CallToAction setValue={props.setValue} />
            </Grid>

        </Grid>
    );
}
