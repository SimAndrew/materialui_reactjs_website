import React from "react";
import Lottie from "react-lottie";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import vision from "../assets/vision.svg";
import consultation from "../assets/consultationIcon.svg";
import mockup from "../assets/mockupIcon.svg";
import review from "../assets/reviewIcon.svg";
import design from "../assets/designIcon.svg";
import build from "../assets/buildIcon.svg";
import launch from "../assets/launchIcon.svg";
import maintain from "../assets/maintainIcon.svg";
import iterate from "../assets/iterateIcon.svg";
import technologyAnimation from "../animations/technologyAnimation/data.json";

const useStyles = makeStyles(theme => ({
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
        }
    }
}));

export default function Revolution() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: technologyAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container direction="column">
            <Grid item className={classes.rowContainer} style={{marginTop: "2em"}}>
                <Typography align={matchesMD ? "center" : undefined} variant="h2" style={{fontFamily: "Pacifico"}}>The Revolution</Typography>
            </Grid>

            <Grid item container direction={matchesMD ? "column" : "row"} alignItems="center" className={classes.rowContainer} style={{marginTop: "5em"}}>
                <Grid item lg>
                    <img src={vision} alt="mountain through binoculars" style={{maxWidth: matchesSM ? 300 : "40em", marginRight: matchesMD ? 0 : "5em", marginBottom: matchesMD ? "5em" : 0}} />
                </Grid>

                <Grid item container direction="column" lg style={{maxWidth: "40em"}}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : "right"} variant="h4" gutterBottom>Vision</Typography>
                    </Grid>

                    <Grid item>
                        <Typography align={matchesMD ? "center" : "right"} variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis
                            possimus voluptate? Blanditiis distinctio error, eveniet expedita nemo nesciunt
                            nihil omnis quo ratione reiciendis vel veniam veritatis. Atque beatae eius illum!
                            Alias laborum nesciunt numquam.
                        </Typography>
                        <Typography align={matchesMD ? "center" : "right"} variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis
                            possimus voluptate? Blanditiis distinctio error, eveniet expedita nemo nesciunt
                            nihil omnis quo ratione reiciendis vel veniam veritatis. Atque beatae eius illum!
                            Alias laborum nesciunt numquam.
                        </Typography>
                        <Typography align={matchesMD ? "center" : "right"} variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis
                            possimus voluptate? Blanditiis distinctio error, eveniet expedita nemo nesciunt
                            nihil omnis quo ratione reiciendis vel veniam veritatis. Atque beatae eius illum!
                            Alias laborum nesciunt numquam.
                        </Typography>
                        <Typography align={matchesMD ? "center" : "right"} variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis
                            possimus voluptate? Blanditiis distinctio error, eveniet expedita nemo nesciunt
                            nihil omnis quo ratione reiciendis vel veniam veritatis. Atque beatae eius illum!
                            Alias laborum nesciunt numquam.
                        </Typography>
                        <Typography align={matchesMD ? "center" : "right"} variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis
                            possimus voluptate? Blanditiis distinctio error, eveniet expedita nemo nesciunt
                            nihil omnis quo ratione reiciendis vel veniam veritatis. Atque beatae eius illum!
                            Alias laborum nesciunt numquam.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container direction={matchesMD ? "column" : "row"} alignItems="center" className={classes.rowContainer} style={{marginTop: "10em", marginBottom: "10em"}}>
                <Grid item container direction="column" lg style={{maxWidth: "40em"}}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h4" gutterBottom>Technology</Typography>
                    </Grid>

                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis
                            possimus voluptate? Blanditiis distinctio error, eveniet expedita nemo nesciunt
                            nihil omnis quo ratione reiciendis vel veniam veritatis. Atque beatae eius illum!
                            Alias laborum nesciunt numquam.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis
                            possimus voluptate? Blanditiis distinctio error, eveniet expedita nemo nesciunt
                            nihil omnis quo ratione reiciendis vel veniam veritatis. Atque beatae eius illum!
                            Alias laborum nesciunt numquam.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis
                            possimus voluptate? Blanditiis distinctio error, eveniet expedita nemo nesciunt
                            nihil omnis quo ratione reiciendis vel veniam veritatis. Atque beatae eius illum!
                            Alias laborum nesciunt numquam.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis
                            possimus voluptate? Blanditiis distinctio error, eveniet expedita nemo nesciunt
                            nihil omnis quo ratione reiciendis vel veniam veritatis. Atque beatae eius illum!
                            Alias laborum nesciunt numquam.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis
                            possimus voluptate? Blanditiis distinctio error, eveniet expedita nemo nesciunt
                            nihil omnis quo ratione reiciendis vel veniam veritatis. Atque beatae eius illum!
                            Alias laborum nesciunt numquam.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis
                            possimus voluptate? Blanditiis distinctio error, eveniet expedita nemo nesciunt
                            nihil omnis quo ratione reiciendis vel veniam veritatis. Atque beatae eius illum!
                            Alias laborum nesciunt numquam.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis
                            possimus voluptate? Blanditiis distinctio error, eveniet expedita nemo nesciunt
                            nihil omnis quo ratione reiciendis vel veniam veritatis. Atque beatae eius illum!
                            Alias laborum nesciunt numquam.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container justify={matchesMD ? "center" : "flex-end"} lg>
                    <Lottie options={defaultOptions} isStopped={true} style={{maxWidth: "40em", margin: 0}} />
                </Grid>
            </Grid>

            <Grid item container direction="row" justify="center" className={classes.rowContainer}>
                <Grid item>
                    <Typography variant="h4" gutterBottom>Process</Typography>
                </Grid>
            </Grid>

            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#B3B3B3", height: "90em"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography variant="h4" align={matchesMD ? "center" : undefined} gutterBottom style={{color: "#000", marginTop: "5em"}}>Consultation</Typography>
                    </Grid>

                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: "#fff", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eaque earum
                            est eum fuga harum itaque magnam nemo obcaecati officia officiis quae quasi
                            quibusdam quidem ratione, temporibus, vel vitae.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: "#fff", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eaque earum
                            est eum fuga harum itaque magnam nemo obcaecati officia officiis quae quasi
                            quibusdam quidem ratione, temporibus, vel vitae.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: "#fff", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eaque earum
                            est eum fuga harum itaque magnam nemo obcaecati officia officiis quae quasi
                            quibusdam quidem ratione, temporibus, vel vitae.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item lg style={{alignSelf: "center"}}>
                    <img src={consultation} alt="handshake" width="100%" style={{maxWidth: 700}} />
                </Grid>
            </Grid>

            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#FF7373", height: "90em"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h4" gutterBottom style={{color: "#000", marginTop: "5em"}}>Mockup</Typography>
                    </Grid>

                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: "#fff", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eaque earum
                            est eum fuga harum itaque magnam nemo obcaecati officia officiis quae quasi
                            quibusdam quidem ratione, temporibus, vel vitae.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: "#fff", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eaque earum
                            est eum fuga harum itaque magnam nemo obcaecati officia officiis quae quasi
                            quibusdam quidem ratione, temporibus, vel vitae.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: "#fff", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eaque earum
                            est eum fuga harum itaque magnam nemo obcaecati officia officiis quae quasi
                            quibusdam quidem ratione, temporibus, vel vitae.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item lg style={{alignSelf: "center"}}>
                    <img src={mockup} alt="basic website design outline" width="100%" style={{maxWidth: 1000}} />
                </Grid>
            </Grid>

            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#39B54A", height: "90em"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h4" gutterBottom style={{color: "#000", marginTop: "5em"}}>Review</Typography>
                    </Grid>

                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: "#fff", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eaque earum
                            est eum fuga harum itaque magnam nemo obcaecati officia officiis quae quasi
                            quibusdam quidem ratione, temporibus, vel vitae.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: "#fff", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eaque earum
                            est eum fuga harum itaque magnam nemo obcaecati officia officiis quae quasi
                            quibusdam quidem ratione, temporibus, vel vitae.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: "#fff", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eaque earum
                            est eum fuga harum itaque magnam nemo obcaecati officia officiis quae quasi
                            quibusdam quidem ratione, temporibus, vel vitae.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item lg style={{alignSelf: "center"}}>
                    <img src={review} alt="magnifying glass" width="100%" />
                </Grid>
            </Grid>

            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#A67C52", height: "90em"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h4" gutterBottom style={{color: "#000", marginTop: "5em"}}>Design</Typography>
                    </Grid>

                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: "#fff", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eaque earum
                            est eum fuga harum itaque magnam nemo obcaecati officia officiis quae quasi
                            quibusdam quidem ratione, temporibus, vel vitae.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: "#fff", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eaque earum
                            est eum fuga harum itaque magnam nemo obcaecati officia officiis quae quasi
                            quibusdam quidem ratione, temporibus, vel vitae.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item lg style={{alignSelf: "center"}}>
                    <img src={design} alt="paintbrush leaving stroke of paint" width="100%" style={{maxWidth: 1000}} />
                </Grid>
            </Grid>

            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#39B54A", height: "90em"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h4" gutterBottom style={{color: "#000", marginTop: "5em"}}>Review</Typography>
                    </Grid>

                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: "#fff", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eaque earum
                            est eum fuga harum itaque magnam nemo obcaecati officia officiis quae quasi
                            quibusdam quidem ratione, temporibus, vel vitae.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: "#fff", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eaque earum
                            est eum fuga harum itaque magnam nemo obcaecati officia officiis quae quasi
                            quibusdam quidem ratione, temporibus, vel vitae.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item lg style={{alignSelf: "center"}}>
                    <img src={review} alt="magnifying glass" width="100%" />
                </Grid>
            </Grid>

            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#FBB03B", height: "90em"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h4" gutterBottom style={{color: "#000", marginTop: "5em"}}>Build</Typography>
                    </Grid>

                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: "#fff", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eaque earum
                            est eum fuga harum itaque magnam nemo obcaecati officia officiis quae quasi
                            quibusdam quidem ratione, temporibus, vel vitae.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: "#fff", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eaque earum
                            est eum fuga harum itaque magnam nemo obcaecati officia officiis quae quasi
                            quibusdam quidem ratione, temporibus, vel vitae.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: "#fff", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eaque earum
                            est eum fuga harum itaque magnam nemo obcaecati officia officiis quae quasi
                            quibusdam quidem ratione, temporibus, vel vitae.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item lg style={{alignSelf: "center"}}>
                    <img src={build} alt="building construction site" width="100%" style={{maxWidth: matchesMD ? 700 : 1000}} />
                </Grid>
            </Grid>

            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#C1272D", height: "90em"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h4" gutterBottom style={{color: "#000", marginTop: "5em"}}>Launch</Typography>
                    </Grid>

                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: "#fff", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eaque earum
                            est eum fuga harum itaque magnam nemo obcaecati officia officiis quae quasi
                            quibusdam quidem ratione, temporibus, vel vitae.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: "#fff", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eaque earum
                            est eum fuga harum itaque magnam nemo obcaecati officia officiis quae quasi
                            quibusdam quidem ratione, temporibus, vel vitae.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item lg style={{alignSelf: "center"}}>
                    <img src={launch} alt="rocket" width="100%" style={{maxWidth: 200}} />
                </Grid>
            </Grid>

            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#8E45CE", height: "90em"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h4" gutterBottom style={{color: "#000", marginTop: "5em"}}>Maintain</Typography>
                    </Grid>

                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: "#fff", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eaque earum
                            est eum fuga harum itaque magnam nemo obcaecati officia officiis quae quasi
                            quibusdam quidem ratione, temporibus, vel vitae.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: "#fff", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eaque earum
                            est eum fuga harum itaque magnam nemo obcaecati officia officiis quae quasi
                            quibusdam quidem ratione, temporibus, vel vitae.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item lg style={{alignSelf: "center"}}>
                    <img src={maintain} alt="wrench tightening bolts" width="100%" style={{maxWidth: 500}} />
                </Grid>
            </Grid>

            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{backgroundColor: "#29ABE2", height: "90em"}}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h4" gutterBottom style={{color: "#000", marginTop: "5em"}}>Iterate</Typography>
                    </Grid>

                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: "#fff", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eaque earum
                            est eum fuga harum itaque magnam nemo obcaecati officia officiis quae quasi
                            quibusdam quidem ratione, temporibus, vel vitae.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: "#fff", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eaque earum
                            est eum fuga harum itaque magnam nemo obcaecati officia officiis quae quasi
                            quibusdam quidem ratione, temporibus, vel vitae.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{color: "#fff", maxWidth: "20em"}} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis eaque earum
                            est eum fuga harum itaque magnam nemo obcaecati officia officiis quae quasi
                            quibusdam quidem ratione, temporibus, vel vitae.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item lg style={{alignSelf: "center"}}>
                    <img src={iterate} alt="falling dominoes" width="100%" />
                </Grid>
            </Grid>

        </Grid>
    );
}
