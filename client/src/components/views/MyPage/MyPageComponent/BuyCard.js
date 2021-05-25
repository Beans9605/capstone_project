import {  Button, Card, CardActions, CardContent, CardHeader ,ButtonGroup, Grid, makeStyles, Typography } from '@material-ui/core'
import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginBottom: 10,
    },

  });

export default function BuyCard(props){


console.log(props)
    const postId = props.postId

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory()

    const [open, setOpen] = useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (e) => {
        console.log(e.currentTarget.value)
        setOpen(false);
    }

    return(
        <div className={classes.root}>
        <Card elevation={3}>
            <CardContent>
                <Grid container>
                <Grid item xs={12} sm={9}>
                    <CardHeader
                        title={
                            <Typography variant= "h6" color="#000000" style={{marginBottom: '12px'}}>
                                4월 26일 월요일 / 배송완료
                            </Typography>
                        }
                    />
                    <Grid container>   
                    <Grid item xs={12} sm={12}>
                            <Typography style={{marginBottom: '12px'}}>
                                에프씨팩토리 에브리데이 클린미세먼지 방역마스트 [kf94 50개], 1팩 50매입 주문내역 길게 적기
                            </Typography>
                            <Typography >
                                1개, 41500원
                            </Typography>
                    </Grid>
                    </Grid>         
                </Grid>
                <Grid item xs={12} sm={3}>
                <CardActions
                >
                <ButtonGroup
                    orientation="vertical"
                    fullWidth
                >
                    <Button aria-label='주문취소하기' style={{fontSize:'1rem'}} >주문취소</Button>
                    <Button aria-label='배송조회하기' style={{fontSize:'1rem'}}>배송조회</Button>
                    <Button aria-label='음성리뷰작성하기' style={{fontSize:'1rem'}}>음성리뷰작성</Button>
                    <Button aria-label='일반글자리뷰작성하기' style={{fontSize:'1rem'}} href='reviewWrite'>일반리뷰작성</Button>
                    <Button aria-label='문의하기' style={{fontSize:'1rem'}}>문의하기</Button>
                </ButtonGroup>
                </CardActions>
                </Grid>
                </Grid>
            </CardContent>
        </Card>
        </div>
    )
}


