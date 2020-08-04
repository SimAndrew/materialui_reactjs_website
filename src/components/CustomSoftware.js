import React from "react";
import Lottie from "react-lottie";
import {Link} from "react-router-dom";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import roots from "../assets/root.svg";

import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data";

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
    itemContainer: {
        maxWidth: "40em"
    }
}));

export default function CustomSoftware(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const documentsOptions = {
        loop: true,
        autoplay: false,
        animationData: documentsAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const scaleOptions = {
        loop: true,
        autoplay: false,
        animationData: scaleAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const automationOptions = {
        loop: true,
        autoplay: false,
        animationData: automationAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const uxOptions = {
        loop: true,
        autoplay: false,
        animationData: uxAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return(
        <Grid container direction="column">
            <Grid item container direction="row" justify={matchesMD ? "center" : undefined} className={classes.rowContainer} style={{marginTop: matchesXS ? "1em" : "2em"}}>

                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{marginRight: "1em", marginLeft: "-3.5em"}}>
                        <IconButton style={{backgroundColor: "transparent"}} component={Link} to="/services" onClick={() => props.setSelectedIndex(0)}>
                            <img src={backArrow} alt="Back to Services Page" />
                        </IconButton>
                    </Grid>
                </Hidden>

                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h2">Custom Software Development</Typography>
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolores ea, eaque,
                            eligendi expedita facere illo labore maxime minus nam nemo nobis odio officia quas
                            recusandae repellendus repudiandae tenetur ut! Atque aut deserunt facilis fugit,
                            harum hic maiores natus quam quisquam sed sequi ut voluptatum!
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt earum error
                            facere nesciunt recusandae repellendus.
                        </Typography>
                    </Grid>
                </Grid>

                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton style={{backgroundColor: "transparent"}} component={Link} to="/mobileapps" onClick={() => props.setSelectedIndex(2)}>
                            <img src={forwardArrow} alt="Forward to IOS/Android App Development Page" />
                        </IconButton>
                    </Grid>
                </Hidden>

            </Grid>

            <Grid item container direction="row" justify="center" style={{marginTop: "15em", marginBottom: "20em"}} className={classes.rowContainer}>
                <Grid item container direction="column" md alignItems="center" style={{maxWidth: "40em"}}>
                    <Grid item>
                        <Typography variant="h4">Save Energy</Typography>
                    </Grid>
                    <Grid item>
                        <img src={lightbulb} alt="lightbulb" />
                    </Grid>
                </Grid>

                <Grid item container direction="column" md alignItems="center" style={{maxWidth: "40em", marginTop: matchesSM ? "10em" : 0, marginBottom: matchesSM ? "10em" : 0}}>
                    <Grid item>
                        <Typography variant="h4">Save Time</Typography>
                    </Grid>
                    <Grid item>
                        <img src={stopwatch} alt="stopwatch" />
                    </Grid>
                </Grid>

                <Grid item container direction="column" md alignItems="center" style={{maxWidth: "40em"}}>
                    <Grid item>
                        <Typography variant="h4">Save Money</Typography>
                    </Grid>
                    <Grid item>
                        <img src={cash} alt="cash" />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container alignItems={matchesMD ? "center" : undefined} direction={matchesMD ? "column" : "row"} justify="space-between" className={classes.rowContainer}>
                <Grid item container className={classes.itemContainer} direction={matchesSM ? "column" : "row"} style={{marginBottom: matchesMD ? "15em" : 0}} md>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : undefined}>Digital Documents & Data</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, incidunt!
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ea et ex
                                exercitationem impedit perferendis ullam! Ab adipisci commodi cupiditate dolorum
                                incidunt laborum nesciunt, odio quidem reiciendis veritatis voluptas voluptates?
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deserunt in
                                tempora tempore. Atque consequuntur doloremque dolorum eius ex excepturi incidunt
                                iusto magnam officiis pariatur praesentium quam ratione, repellendus veritatis
                                vero. Culpa dolores et vel!
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={documentsOptions} isStopped={false} style={{maxHeight: 275, maxWidth: 275, minHeight: 250}} />
                    </Grid>
                </Grid>

                <Grid item container className={classes.itemContainer} direction={matchesSM ? "column" : "row"} md>
                    <Grid item md>
                        <Lottie options={scaleOptions} isStopped={false} style={{maxHeight: 260, maxWidth: 280}} />
                    </Grid>

                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : "right"}>Scale</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ea et ex
                                exercitationem impedit perferendis ullam! Ab adipisci commodi cupiditate dolorum
                                incidunt laborum nesciunt, odio quidem reiciendis veritatis voluptas voluptates?
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container direction="row" style={{marginTop: "20em", marginBottom: "20em"}} className={classes.rowContainer}>
                <Grid item container direction="column" alignItems="center">
                    <Grid item>
                        <img src={roots} alt="tree with roots extending out" height= {matchesSM ? "300em" : "450em"} width= {matchesSM ? "300em" : "450em"} />
                    </Grid>
                    <Grid item className={classes.itemContainer}>
                        <Typography variant="h4" align="center" gutterBottom>Root-Cause Analysis</Typography>
                        <Typography variant="body1" align="center" paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
                        <Typography variant="body1" align="center" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eaque harum
                            maxime quisquam sed? Aliquam aliquid at eius eligendi provident quaerat tempora ut!
                            Dolorum eaque harum incidunt laudantium molestias sit?
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container alignItems={matchesMD ? "center" : undefined} direction={matchesMD ? "column" : "row"} justify="space-between" style={{marginBottom: "20em"}} className={classes.rowContainer}>
                <Grid item container className={classes.itemContainer} direction={matchesSM ? "column" : "row"} style={{marginBottom: matchesMD ? "15em" : 0}} md>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : undefined}>Automation</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, incidunt!
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ea et ex
                                exercitationem impedit perferendis ullam! Ab adipisci commodi cupiditate dolorum
                                incidunt laborum nesciunt, odio quidem reiciendis veritatis voluptas voluptates?
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deserunt in
                                tempora tempore. Atque consequuntur doloremque dolorum eius ex excepturi incidunt
                                iusto magnam officiis pariatur praesentium quam ratione, repellendus veritatis
                                vero. Culpa dolores et vel!
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={automationOptions} isStopped={false} style={{maxHeight: 290, maxWidth: 280}} />
                    </Grid>
                </Grid>

                <Grid item container className={classes.itemContainer} direction={matchesSM ? "column" : "row"} md>
                    <Grid item md>
                        <Lottie options={uxOptions} isStopped={false} style={{maxHeight: 310, maxWidth: 155}} />
                    </Grid>

                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : "right"}>User Experience Design</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </Typography>
                            <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </Typography>
                            <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ex fuga fugiat in
                                ipsum nulla quasi quia quis quos temporibus!
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <CallToAction setValue={props.setValue} />
            </Grid>

        </Grid>
    );
}
