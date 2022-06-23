function FullName(){
    const GmcProfile= "https://gomycodelearndev.blob.core.windows.net/profiles/fa861a61-fa5c-4a51-b067-e1cdf078751a-132917383347723889.JPG";
    return (
        <h1 style={{color:"	#B22222"}}>RTIMI Fatma
            <a href={GmcProfile} target="_blank"> <i style={{color:"blue"}} class="gmc-photo-profile"></i> </a>
        </h1>
    );
}

export default FullName;