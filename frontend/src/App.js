import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from './data';

function App() {

  const check =(value)=> {

    var veg_section=	document.getElementsByClassName("veg_section");
		var fruit_section = document.getElementsByClassName("fruit_section");
		
		if (value=="all"){
		veg_section[0].style.display="block";
		fruit_section[0].style.display="block";
		}
		else if(value=="Veg"){
			veg_section[0].style.display="block";
			fruit_section[0].style.display="none";
		}
		else if(value=="fruits"){
			veg_section[0].style.display="none";
			fruit_section[0].style.display="block";
		}
		else{
			veg_section[0].style.display="block";
			fruit_section[0].style.display="block";
		}
		

	

  }
  return (
    <div classNameName="App">
   <div className="container-fluid bg-dark header-top d-none d-md-block">
	<div className="container">
		<div className="row text-light pt-2 pb-2">
			<div className="col-md-5 Store_name">Green Store</div>
			<div className="col-md-3">
				
			</div>
			<div className="col-md-2 pt-3"><i className="fa fa-user-o" aria-hidden="true"></i> Account</div>
			<div className="col-md-2 pt-3"><i className="fa fa-cart-plus" aria-hidden="true"></i> My Cart - $0.00</div>
		</div>
	</div>
</div>

<div className="container-fluid bg-black">
	<nav className="container navbar navbar-expand-lg navbar-dark bg-black">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home<span className="sr-only"></span></a>
      </li>
    
    </ul>
    
  </div>
</nav>
</div>



<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="/images/p1.jpg" alt="First slide"></img>
      <div className="carousel-caption d-none d-md-block">
       <h1>Fresh Fruits & Vegetables</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       <button className="btn btn-info btn-lg">Shop Now.</button>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="/images/p3.jpg" alt="Second slide"></img>
      <div className="carousel-caption d-none d-md-block">
       <h1>Fresh Fruits & Vegetables</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="btn btn-info btn-lg">Shop Now.</button>
      </div>
    </div>
    
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>


<div className="container-fluid offer pt-3 pb-3  d-none d-md-block ">
	<div className="container">
		<div className="row">
			<div className="col-md-4 m-right">
				<h4>FREE SHIPPING</h4>
				<p>on order over 90$</p>
			</div>
			<div className="col-md-4 m-right">
				<h4>CALL US ANYTIME</h4>
				<p>+91 ######12##</p>
			</div>
			<div className="col-md-4">
				<h4>OUR  LOCATION</h4>
				<p>XYZ,India</p>
			</div>
		</div>
	</div>
</div>

<div className="filter p-3" >
	<div className="flex_filter pt-5">
		<h4>Filter :</h4>
		<button onClick={()=>check('all')}className="btn btn-danger">Show All</button>
		<button onClick={()=>check('fruits')} className="btn btn-danger">Fruits</button>
		<button onClick={()=>check('Veg')} className="btn btn-danger">Vegetables</button>

	</div>
</div>


<div className="container-fluid bg-light-gray">

<div className="fruit_section pb-5">
<div className="container ">
	<div className="row">
		
		<h3>Fruits</h3>
		<p>Category:fruits</p>
	</div>
	<div className="underline"></div>
</div>


<div className="container mt-5">
	<div className="row">

{
    data.products.map(product=>
{
    if(product.category == 'Fruits'){

	return (	<div className="col-md-3">
			<div className="card">
				<img src={product.image} className="card-img-top"></img>
				<div className="card-body">
					<h5>{product.name}</h5>
					<h5>${product.price}</h5>
           <p>Vendor:{product.vendor}</p>
					<button className="btn btn-danger"><i className="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</button>
				</div>
			</div>
		</div>
  )
    }
    })
}
		
		

	</div>
</div>

</div>

<div className="veg_section ">

<div className="container mt-5 " >
	<div className="row">
		<h3>Vegetables</h3>
		<p>Category:vegetables</p>
	</div>
	<div className="row">
		<div className="underline"></div>
	</div>
</div>

<div className="container mt-5 pb-5">
	<div className="row">
	
{
    data.products.map(product=>
{
    if(product.category == 'Vegetables'){

	return (	<div className="col-md-3">
			<div className="card">
				<img src={product.image} className="card-img-top"></img>
				<div className="card-body">
					<h5>{product.name}</h5>
					<h5>${product.price}</h5>
           <p>Vendor:{product.vendor}</p>
					<button className="btn btn-danger"><i className="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</button>
				</div>
			</div>
		</div>
  )
    }
    })
}

	</div>
</div> 

</div>
</div>
<footer>
	<div className="container-fluid pt-5 bg-dark text-light">
		<div className="container p-5">
		<div className="footer">Green Store</div>
		</div>
	</div> 
</footer>
    </div>
  );
}

export default App;
