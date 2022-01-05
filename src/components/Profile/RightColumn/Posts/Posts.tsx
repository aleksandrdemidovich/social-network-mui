import React from 'react';
import Post from "./Post/Post";
import {Divider, Grid, Paper} from "@mui/material";
import {styled} from '@mui/material/styles';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import {PostsPropsType} from "./PostsContainer";
import Typography from "@mui/material/Typography";


const PostContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
`;
const NoPostsContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;

  & svg {
    color: gray;
    font-size: 130px;
  }
;
`;

const Posts = React.memo((props: PostsPropsType) => {


    const postsElement = props.posts.map(p =>
        <PostContainer container item key={p.id}>
            <Paper elevation={4}>
                <Post key={p.id}
                      id={p.id}
                      message={p.message}
                      likeCount={p.likeCount}
                      isLiked={p.isLiked}
                      deletePost={props.deletePost}
                      photos={props.profilePhotos}
                      userName={props.userName}
                />
            </Paper>
        </PostContainer>
    )

    return (
        <>
            {props.posts.length === 0
                ? <NoPostsContainer container item>
                    <Paper elevation={4}>
                        <Grid item style={{padding: '20px'}}>
                            <Typography>No post yet</Typography>
                        </Grid>
                        <Divider/>
                        <Grid item style={{padding: '20px'}} display={"flex"} flexDirection={"column"}
                              alignItems={"center"}>
                            <DescriptionOutlinedIcon style={{marginBottom: '20px'}}/>
                            <Typography variant={"body2"}>There are no posts here yet</Typography>
                        </Grid>
                    </Paper>
                </NoPostsContainer>
                : postsElement}

        </>
    );
})

export default Posts;
