import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => console.log(`clicked the card!`)}>
        <CardMedia
          component="img"
          alt="Hideout.tv"
          height="140"
          image="/images/cards/hideout.jpg"
          title="Hideout.tv"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Hideout.tv
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Earn points by watching videos. Redeem these points to earn.dog for
            your rewards!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
