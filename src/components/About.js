import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import history from "../assets/history.svg";
import profile from "../assets/founder.png";
import yearbook from "../assets/yearbook.png";
import puppy from "../assets/puppy.svg";

import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles(theme => ({
    missionStatement: {
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: "1.5rem",
        maxWidth: "50rem",
        lineHeight: 1.4
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
        }
    },
    avatar: {
        height: "15em",
        width: "15em",
        [theme.breakpoints.down("sm")]: {
            height: "20em",
            width: "20em",
            maxHeight: 300,
            maxWidth: 300
        }
    }
}))

export default function About(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Grid container direction="column">
            <Grid item className={classes.rowContainer} style={{marginTop: matchesMD ? "1em" : "2em"}}>
                <Typography align={matchesMD ? "center" : undefined} variant="h2">About Us</Typography>
            </Grid>

            <Grid item container justify="center" className={classes.rowContainer} style={{marginTop: "3em"}}>
                <Typography variant="h4" align="center" className={classes.missionStatement}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                    aspernatur consequatur ipsam labore laudantium? Accusantium aperiam
                    assumenda debitis dolores incidunt laborum maiores mollitia nesciunt
                    porro quisquam repellendus, saepe sint! Earum minus nam rerum sapiente
                    voluptatibus?
                </Typography>
            </Grid>

            <Grid item container className={classes.rowContainer} style={{marginTop: "10em", marginBottom: "10em"}} direction={matchesMD ? "column" : "row"} alignItems={matchesMD ? "center" : undefined} justify="space-around">

                <Grid item>
                    <Grid item container direction="column" lg style={{maxWidth: "35em"}}>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant="h4" gutterBottom>History</Typography>
                        </Grid>

                        <Grid item>
                            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph style={{fontWeight: 700, fontStyle: "italic"}}>
                                Lorem ipsum dolor sit amet.
                            </Typography>

                            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, minus.
                            </Typography>

                            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolor ducimus
                                eius eos fugiat illo labore perspiciatis quas sapiente vel.
                            </Typography>

                            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolor in officia!
                                Cumque dolore doloremque illo molestias vero? A corporis cum debitis dolores ea libero
                                minima nostrum pariatur quia. Autem et inventore ipsum obcaecati recusandae sequi vel,
                                velit voluptates? Perspiciatis.
                            </Typography>

                            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, minus.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid item container justify="center" lg>
                        <img src={history} alt={"quill pen sitting on top of book"} style={{maxHeight: matchesMD ? 200 : "22em"}} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container direction="column" alignItems="center" className={classes.rowContainer} style={{marginBottom: "15em"}}>
                <Grid item>
                    <Typography align="center" variant="h4" gutterBottom>Team</Typography>
                </Grid>

                <Grid item>
                    <Typography variant="body1" paragraph align="center">
                        Aaa Bbb, Founder
                    </Typography>

                    <Typography variant="body1" paragraph align="center">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                </Grid>

                <Grid item>
                    <Avatar alt="founder" src={profile} className={classes.avatar} />
                </Grid>

                <Grid item container justify={matchesMD ? "center" : undefined}>
                    <Hidden lgUp>
                        <Grid item lg style={{maxWidth: "45em", padding: "1.25em"}}>
                            <Typography variant="body1" align="center" paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis facilis modi totam? Adipisci
                                dolore eius incidunt ratione veniam! Dolore doloribus ea et quae saepe sint.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis facilis modi totam? Adipisci
                                dolore eius incidunt ratione veniam! Dolore doloribus ea et quae saepe sint.
                            </Typography>

                            <Typography variant="body1" align="center" paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis facilis modi totam? Adipisci
                                dolore eius incidunt ratione veniam! Dolore doloribus ea et quae saepe sint.
                            </Typography>
                        </Grid>
                    </Hidden>

                    <Grid item container direction="column" lg alignItems={matchesMD ? "center" : undefined} style={{marginBottom: matchesMD ? "2.5em" : 0}}>
                        <Grid item>
                            <img src={yearbook} alt="yearbook page" style={{maxWidth: matchesMD ? 240 : 440}} />
                        </Grid>

                        <Grid item>
                            <Typography variant="caption">Lorem ipsum dolor sit.</Typography>
                        </Grid>
                    </Grid>

                    <Hidden mdDown>
                        <Grid item lg style={{maxWidth: "45em", padding: "1.25em"}}>
                            <Typography variant="body1" align="center" paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis facilis modi totam? Adipisci
                                dolore eius incidunt ratione veniam! Dolore doloribus ea et quae saepe sint.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis facilis modi totam? Adipisci
                                dolore eius incidunt ratione veniam! Dolore doloribus ea et quae saepe sint.
                            </Typography>

                            <Typography variant="body1" align="center" paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis facilis modi totam? Adipisci
                                dolore eius incidunt ratione veniam! Dolore doloribus ea et quae saepe sint.
                            </Typography>
                        </Grid>
                    </Hidden>

                    <Grid item container direction="column" lg alignItems={matchesMD ? "center" : "flex-end"}>
                        <Grid item>
                            <img src={puppy} alt="grey spotted puppy" style={{maxWidth: matchesMD ? 240 : 500}} />
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">Lorem ipsum dolor sit amet.</Typography>
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
