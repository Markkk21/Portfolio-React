import * as React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import MyPhoto from '../../img/project.png';
function ProjectList() {
  return (
    <div id="containerProject">
        <Grid container spacing={2}>

            {/* Projects */}
            <Grid item xs={12} sm={3}>
                <Card id="cardProject">
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        src={MyPhoto}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Project Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Desc
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>

            <Grid item xs={12} sm={3}>
                <Card id="cardProject">
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        src={MyPhoto}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Project Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Desc
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        
            <Grid item xs={12} sm={3}>
                <Card id="cardProject">
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        src={MyPhoto}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Project Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Desc
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>

            <Grid item xs={12} sm={3}>
                <Card id="cardProject">
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        src={MyPhoto}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Project Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Desc
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>

            
        </Grid>
    </div>
  );
};
export default ProjectList;