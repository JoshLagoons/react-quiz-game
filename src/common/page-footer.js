function PageFooter() {
    const year = new Date().getFullYear();
    return <footer className="page-footer">Jo Lagoons, {year}</footer>;
}

export default PageFooter;