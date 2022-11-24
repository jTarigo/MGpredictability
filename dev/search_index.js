var documenterSearchIndex = {"docs":
[{"location":"Functions/defineAttractor/#defineAttractor","page":"defineAttractor","title":"defineAttractor","text":"","category":"section"},{"location":"contents/Functions/#Functions","page":"Functions","title":"Functions","text":"","category":"section"},{"location":"contents/Types/#Types","page":"Types","title":"Types","text":"","category":"section"},{"location":"contents/Types/","page":"Types","title":"Types","text":"The following is a list of the types of variables used inside the library.","category":"page"},{"location":"contents/Types/#Systems","page":"Types","title":"Systems","text":"","category":"section"},{"location":"Future Implementations/#Future-Implementations","page":"Future Implementations","title":"Future Implementations","text":"","category":"section"},{"location":"Functions/DynSys/#DynSys","page":"DynSys","title":"DynSys","text":"","category":"section"},{"location":"Functions/DynSys/","page":"DynSys","title":"DynSys","text":"The function DynSys defines the Mackey-Glass dynamical system as a Dynamical System from DynamicalSystems.jl.","category":"page"},{"location":"Functions/DynSys/","page":"DynSys","title":"DynSys","text":"The function returns a single variable of the type DinamicalSystem and is called as:","category":"page"},{"location":"Functions/DynSys/","page":"DynSys","title":"DynSys","text":"DynSys(S::MG, init_cond::AbstractVector, algorithm::discreteSolver)","category":"page"},{"location":"Functions/DynSys/","page":"DynSys","title":"DynSys","text":"with the added condition that the init_cond Vector must be of length S.N.","category":"page"},{"location":"Functions/DynSys/","page":"DynSys","title":"DynSys","text":"The function uses two other functions eom! and jacobian! which update the state of the system and the MG jacobian respectively, it also initializes the MG jacobian as a sparse matrix from SparseArrays.","category":"page"},{"location":"Functions/MLE/#MLE","page":"MLE","title":"MLE","text":"","category":"section"},{"location":"#Mackey-Glass-Predictability","page":"Introduction","title":"Mackey-Glass Predictability","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"MGpredictability is a Julia library for time series analysis","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"To learn how yo use MGpredictability you can see Getting started and Contents for further references.","category":"page"},{"location":"#Getting-started","page":"Introduction","title":"Getting started","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"To install MGpredictability you can do:","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"using Pkg; Pkg.add(\"https://github.com/jTarigo/MGpredictability\")","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"The library is composed of ","category":"page"},{"location":"#The-Mackey-Glass-System","page":"Introduction","title":"The Mackey-Glass System","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"The Mackey-Glass (MG) system was proposed in 1977 to model the process of crations of blood cells in the bone marrow and its realse to the blood stream Mackey, M. & Glass L. (1977). It can be modeled as the following DDE:","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"fracdxdt = alpha fracx_Gamma1 + x^n_Gamma - x","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"where alpha, Gamma and n are parameters and x_Gamma = x(t - Gamma).","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"DDEs can be solved by many methods used for solving ODEs like the Runge-Kutta methods. However, for the MG system there is an exact discrete implementation as described in Amil, P., Cabeza, C., & Marti, A. C. (2015).","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"This implementation leaves the equation as a map of N variables as:","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"x_j(t + 1) = \r\nbegincases \r\nx_j + 1 quad quad quad quad qquad quad quad quad quad quad if quad j  N \r\nbeta x_j + (1 - beta) alpha fracx_j - N +11 + x^n_j - N +1 quad quad if quad j = N\r\nendcases","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"where N is the number of points in a time interval Gamma and beta = exp(GammaN). This map has a jacobian of the form:","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"J = beginbmatrix \r\n    0  1  0  dots  0\r\n    0  0  1  dots  0\r\n    vdots  vdots  vdots  ddots  vdots\r\n    0  0  0  dots  1\r\n    alpha (1 - beta) frac1 - (n - 1) x^n_1(1 + x^n_1)^2  dots  dots  dots  beta \r\n    endbmatrix","category":"page"},{"location":"Functions/TimeSeries/#TimeSeries","page":"TimeSeries","title":"TimeSeries","text":"","category":"section"},{"location":"Functions/isospike_diagram/#isospike_diagram","page":"isospike_diagram","title":"isospike_diagram","text":"","category":"section"}]
}
