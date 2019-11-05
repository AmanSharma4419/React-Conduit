import React from 'react';
function DeleteArticle(props) {
   const toDelete = () => {
        const Slug = props.slug
        fetch(`https://conduit.productionready.io/api/articles/${Slug}`,{
            method:"DELETE",
            headers: {
                'Authorization':`Token ${localStorage.getItem("Token")}`,
                // 'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(alert("Article Deleted Sucessfully"))
    }
    return(
        <>
        <button className="btn" onClick={toDelete}>Delete</button>
        </>
    )
}
export default DeleteArticle;
