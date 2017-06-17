const data = [
    { Id: 1, Author: "Daniel Lo Nigro", Text: "Hello ReactJS.NET World!" },
    { Id: 2, Author: "Pete Hunt", Text: "This is one comment" },
    { Id: 3, Author: "Jordan Walke", Text: "This is *another* comment" }
]

const Comment = ({ author, text }) => (
    <div className="comment">
        <h2 className="commentAuthor">
            {author}
        </h2>
        {text}
    </div>
)

const CommentList = ({ data }) => {
    const comments = data.map(comment => (
        <Comment
            key={comment.Id}
            author={comment.Author}
            text={comment.Text}
        />
    ))

    return (
        <div className="commentList">
            {comments}
        </div>
    )
}

const CommentForm = () => (
    <div className="commentForm">
        Hello, world! I am a CommentForm.
    </div>
)

const CommentBox = ({ data }) => (
    <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={data} />
        <CommentForm />
    </div>
)

ReactDOM.render(
    <CommentBox data={data} />,
    document.getElementById('content'),
)
