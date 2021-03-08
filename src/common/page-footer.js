function PageFooter() {
    const year = new Date().getFullYear();
    return <footer className="page-footer">Jo Lagunas, {year}</footer>;
}

export default PageFooter;