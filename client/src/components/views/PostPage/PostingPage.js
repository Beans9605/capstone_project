import React, { useState, useEffect } from 'react'
import { Container, Grid, TextField, makeStyles, Typography, Button } from "@material-ui/core"
import Axios from 'axios'
import Dropzone from 'react-dropzone'
import { Title, PlusOne, Clear } from '@material-ui/icons'
import {useDispatch, connect} from 'react-redux'
import {USER_AUTH} from '../../../_action/types'
import {useSelector} from 'react-redux'


const useStyle = makeStyles((theme) => ({
    root : {
        justifyContent : 'center',
        alignItems : 'center',
        alignContent : 'center',
    }
}))

// {
//     title 
//     content 
//     author
//     //여기가 소분류 ex) 남성패션 -> 의류
//     pcategory : {
//         type : Schema.Types.ObjectId,
//         ref : "Category"
//     },
//     purpose : {
//         type : Number,
//         /*
//             0번 : 일반판매글(default),
//             1번 : 자유형식게시글

//             운영자 게시물
//             10번 : 메인 화면 포스팅,
//             11번 : 공지
//         */
//         default : 0
//     },
//     image : [{
//         type : String
//     }],
//     pcolor:[{
//         type: String
//     }],
//     pviews 
//     psales 
//     pcompany 
//     pprice 
//     pstock 
//     psize: 
//     posting : {
//         type : Number,
//         //게시판 별로 넘버링
//     }



function PostingPage(props) {
    
    const user = useSelector(state => state.user)

    

    console.log(user)


    const classes = useStyle();

    const [Title, setTitle] = useState('')
    const [FilePath, setFilePath] = useState([])
    const [Filename, setFilename] = useState([])
    const [Content, setContent] = useState('')
    const [Author, setAuthor] = useState()
    const [Pcategory, setPcategory] = useState()
    const [Purpose, setPurpose] = useState(0)
    const [Pcolor, setPcolor] = useState()
    const [Psales, setPsales] = useState()
    const [Pcompany, setPcompany] = useState()
    const [Price, setPrice] = useState(0)
    const [Stock, setStock] = useState()
    const [Size, setSize] = useState()


    const onDrop = (files) => {
        let formData = new FormData();
        const config = {
            header : {'content-type' : 'multipart/form-data'}
        }
        formData.append('file', files[0])
        Axios.post('/api/post/uploads/files', formData, config)
        .then(response => {
            if (response.data.success) {
                console.log(response.data)
                let filepath = FilePath
                filepath.push(response.data.url)
                setFilePath(filepath)
            }
            else {
                console.log(response.data)
            }

        })
    }

    const onTitleChange = (e) => {
        setTitle(e.currentTarget.value)
    }

    const onContentChange =(e) => {
        setContent(e.currentTarget.value)
    }


    const onSubmit = (e) => {
        e.preventDefault();

        var variables = {
            title : Title,
            image : []
        }
    }

    const onURLDelete = (path) => {
        setFilePath(FilePath.filter(FilePath => FilePath !== path))
    }
   
    return (
        <Container className={classes.root} component='body' >
            <Grid className={classes.root} container >
                <Grid item xs={12}>
                    <h2>판매 게시물 업로드</h2>
                </Grid>
                <Grid item xs={6}>
                    <Dropzone
                        onDrop = {onDrop}
                        multiple = {true}
                        maxSize = {100000000000}
                    >
                        {({getRootProps, getInputProps}) => (
                            <div style={{width: '300px', height : '240px', border:'1px solid lightgray'
                            , alignItems:'center', justifyContent : 'center'}} {...getRootProps()}>
                                <input {...getInputProps()} />
                                <PlusOne  />
                            </div>
                        )}
                    </Dropzone>
                </Grid>
                <Grid item xs={6}>
                    asdfasdf
                    {FilePath && FilePath.map(path => {
                        return (
                                <span>
                                    <h5>
                                        {path}
                                    </h5>
                                    <Button variant="outlined" onClick={onURLDelete(path)} type="submit"><Clear /></Button>
                                </span>
                        )
                    })}
                </Grid>
                <Grid item xs={6}>
                    <label>제목</label>
                    <br/>
                    <TextField variant='outlined' onChange={onTitleChange} type="text" aria-label="제목 입력 칸"  />
                </Grid>
                <Grid item xs={6}>
                    <label>내용</label>
                    <br/>
                    <TextField variant="outlined" onChange={onContentChange} type="text" aria-label="내용 입력 칸" />
                </Grid>
                <Grid item xs={6}>
                    <label>Author</label>
                    <Typography>{Author}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <label>Category</label>
                    <Typography>{Author}</Typography>
                </Grid>
            </Grid>
            </Container>
    )
}

export default PostingPage
