var documenterSearchIndex = {"docs":
[{"location":"Functions/defineAttractor/#defineAttractor","page":"defineAttractor","title":"defineAttractor","text":"","category":"section"},{"location":"Functions/defineAttractor/","page":"defineAttractor","title":"defineAttractor","text":"The function defineAttractor returns a variable of type Attractor and is called as:","category":"page"},{"location":"Functions/defineAttractor/","page":"defineAttractor","title":"defineAttractor","text":"defineAttractor(X::Trajectory)","category":"page"},{"location":"Functions/defineAttractor/","page":"defineAttractor","title":"defineAttractor","text":"where X is a trajectory obtained using the function TimeSeries. ","category":"page"},{"location":"Functions/defineAttractor/","page":"defineAttractor","title":"defineAttractor","text":"This function uses Peaks.jl to find the peaks of the time series contained in only one period if the signal is periodic. It also returns the period and the order of the peaks. If the signal is chaotic the function returns Attractor(-1, -1, []) and it returns Attractor(0, 0, []) if it is a fixed point.","category":"page"},{"location":"contents/Functions/#Functions","page":"Functions","title":"Functions","text":"","category":"section"},{"location":"contents/Types/#Types","page":"Types","title":"Types","text":"","category":"section"},{"location":"contents/Types/","page":"Types","title":"Types","text":"The following is a list of the types of variables used inside the library.","category":"page"},{"location":"contents/Types/#Systems","page":"Types","title":"Systems","text":"","category":"section"},{"location":"contents/Types/","page":"Types","title":"Types","text":"Composed of the type ","category":"page"},{"location":"contents/Types/","page":"Types","title":"Types","text":"abstract type MackeyGlass_System <: AbstractSystem end","category":"page"},{"location":"contents/Types/","page":"Types","title":"Types","text":"and ","category":"page"},{"location":"contents/Types/","page":"Types","title":"Types","text":"struct MG <: MackeyGlass_System\n    α::Float64\n    Γ::Float64\n    n::Int64\n    N::Int64\nend","category":"page"},{"location":"contents/Types/","page":"Types","title":"Types","text":"The struct MG contains the four parameters needed to set the MG discrete equation.","category":"page"},{"location":"contents/Types/#Solvers","page":"Types","title":"Solvers","text":"","category":"section"},{"location":"contents/Types/","page":"Types","title":"Types","text":"Composed of the type","category":"page"},{"location":"contents/Types/","page":"Types","title":"Types","text":"struct discreteSolver <: AbstractSolver end","category":"page"},{"location":"contents/Types/","page":"Types","title":"Types","text":"it defines the algorithm used to solve the equation.","category":"page"},{"location":"contents/Types/#Trajectory","page":"Types","title":"Trajectory","text":"","category":"section"},{"location":"contents/Types/","page":"Types","title":"Types","text":"Composed of the type","category":"page"},{"location":"contents/Types/","page":"Types","title":"Types","text":"struct Trajectory{T, X} <: AbstractTrajectory\n    t::T\n    x::X\nend","category":"page"},{"location":"contents/Types/","page":"Types","title":"Types","text":"it contains the information of a time series of one variable. t represents the time and x the MG variable.","category":"page"},{"location":"contents/Types/#Attractor","page":"Types","title":"Attractor","text":"","category":"section"},{"location":"contents/Types/","page":"Types","title":"Types","text":"Composed of the type","category":"page"},{"location":"contents/Types/","page":"Types","title":"Types","text":"struct Attractor{VC, VT <: Number, VW} <: AbstractAttractor\n    count::VC\n    T::VT\n    Word::VW\nend","category":"page"},{"location":"contents/Types/","page":"Types","title":"Types","text":"defines the MG attractor. count contains the number of peaks in a period, T represents the period of the signal and Word contains the order of the peaks.","category":"page"},{"location":"Future Implementations/#Future-Implementations","page":"Future Implementations","title":"Future Implementations","text":"","category":"section"},{"location":"Functions/DynSys/#DynSys","page":"DynSys","title":"DynSys","text":"","category":"section"},{"location":"Functions/DynSys/","page":"DynSys","title":"DynSys","text":"The function DynSys defines the Mackey-Glass dynamical system as a Dynamical System from DynamicalSystems.jl.","category":"page"},{"location":"Functions/DynSys/","page":"DynSys","title":"DynSys","text":"The function returns a single variable of the type DinamicalSystem and is called as:","category":"page"},{"location":"Functions/DynSys/","page":"DynSys","title":"DynSys","text":"DynSys(S::MG, init_cond::AbstractVector, algorithm::discreteSolver)","category":"page"},{"location":"Functions/DynSys/","page":"DynSys","title":"DynSys","text":"where S is of type MG and contains the parameters of the MG system to evolve, init_cond must be a Vector of length S.N and algorithm is of a certain Solver Type and indicates which solver to use to evolve the equation (at the time only the discrete method is implemented).","category":"page"},{"location":"Functions/DynSys/","page":"DynSys","title":"DynSys","text":"The function uses two other functions eom! and jacobian! which update the state of the system and the MG jacobian respectively, it also initializes the MG jacobian as a sparse matrix from SparseArrays.","category":"page"},{"location":"Functions/MLE/#MLE","page":"MLE","title":"MLE","text":"","category":"section"},{"location":"Functions/MLE/","page":"MLE","title":"MLE","text":"The function MLE can be called as:","category":"page"},{"location":"Functions/MLE/","page":"MLE","title":"MLE","text":"MLE(α::Number, Γ_lim::Tuple; n = 4::Int64, N = 396::Int64, x_in = ones(N)::Vector{Float64}, M = 10::Int64)\n\nMLE(α_lim::Tuple, Γ::Number; n = 4::Int64, N = 396::Int64, x_in = ones(N)::Vector{Float64}, M = 10::Int64)\n\nMLE(α_lim::Tuple, Γ_lim::Tuple; n = 4::Int64, N = 396::Int64, x_in = ones(N)::Vector{Float64}, M = 10::Int64)","category":"page"},{"location":"Functions/MLE/","page":"MLE","title":"MLE","text":"If Γ is a Tuple and α is not then it generates the vector:","category":"page"},{"location":"Functions/MLE/","page":"MLE","title":"MLE","text":"Γ_vals = Γ_lim[1] : (Γ_lim[2] - Γ_lim[1]) / (M - 1) : Γ_lim[2]\n\nΓ = collect(Γ_vals)","category":"page"},{"location":"Functions/MLE/","page":"MLE","title":"MLE","text":"and sweeps the parameter Γ leaving α fixed saving the maximum lyapunov exponent in a vector λ using the function lyapunov from DynamicalSystems.jl. The function returns two vectors Γ and λ.","category":"page"},{"location":"Functions/MLE/","page":"MLE","title":"MLE","text":"If α is a Tuple and Γ is not then it generates the vector:","category":"page"},{"location":"Functions/MLE/","page":"MLE","title":"MLE","text":"α_vals = α_lim[1] : (α_lim[2] - α_lim[1]) / (M - 1) : α_lim[2]\n\nα = collect(α_vals)","category":"page"},{"location":"Functions/MLE/","page":"MLE","title":"MLE","text":"and sweeps the parameter α leaving Γ fixed saving the maximum lyapunov exponent in a vector λ using the function lyapunov from DynamicalSystems.jl. The function returns two vectors α and λ.","category":"page"},{"location":"Functions/MLE/","page":"MLE","title":"MLE","text":"If both α and Γ are Tuple then it creates both vectors, sweeps for both parameters and saves the maximum lyapunov exponent in a matrix λ using the function lyapunov from DynamicalSystems.jl.  The function returns the two vectors α and Γ and the matrix λ.","category":"page"},{"location":"#Mackey-Glass-Predictability","page":"Introduction","title":"Mackey-Glass Predictability","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"MGpredictability is a Julia library for time series analysis","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"To learn how yo use MGpredictability you can see Getting started and Contents for further references.","category":"page"},{"location":"#Getting-started","page":"Introduction","title":"Getting started","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"To install MGpredictability you can do:","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"using Pkg; Pkg.add(\"https://github.com/jTarigo/MGpredictability\")","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"The library is composed of ","category":"page"},{"location":"#The-Mackey-Glass-System","page":"Introduction","title":"The Mackey-Glass System","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"The Mackey-Glass (MG) system was proposed in 1977 to model the process of crations of blood cells in the bone marrow and its realse to the blood stream Mackey, M. & Glass L. (1977). It can be modeled as the following DDE:","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"fracdxdt = alpha fracx_Gamma1 + x^n_Gamma - x","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"where alpha, Gamma and n are parameters and x_Gamma = x(t - Gamma).","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"DDEs can be solved by many methods used for solving ODEs like the Runge-Kutta methods. However, for the MG system there is an exact discrete implementation as described in Amil, P., Cabeza, C., & Marti, A. C. (2015).","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"This implementation leaves the equation as a map of N variables as:","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"x_j(t + 1) = \r\nbegincases \r\nx_j + 1 quad quad quad quad qquad quad quad quad quad quad if quad j  N \r\nbeta x_j + (1 - beta) alpha fracx_j - N +11 + x^n_j - N +1 quad quad if quad j = N\r\nendcases","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"where N is the number of points in a time interval Gamma and beta = exp(GammaN). This map has a jacobian of the form:","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"J = beginbmatrix \r\n    0  1  0  dots  0\r\n    0  0  1  dots  0\r\n    vdots  vdots  vdots  ddots  vdots\r\n    0  0  0  dots  1\r\n    alpha (1 - beta) frac1 - (n - 1) x^n_1(1 + x^n_1)^2  dots  dots  dots  beta \r\n    endbmatrix","category":"page"},{"location":"Functions/TimeSeries/#TimeSeries","page":"TimeSeries","title":"TimeSeries","text":"","category":"section"},{"location":"Functions/TimeSeries/","page":"TimeSeries","title":"TimeSeries","text":"The function TimeSeries returns a variable of type Trajectory and is called as:","category":"page"},{"location":"Functions/TimeSeries/","page":"TimeSeries","title":"TimeSeries","text":"TimeSeries(DS::DiscreteDynamicalSystem; Δt = 200.0, Transient = 1000.0)","category":"page"},{"location":"Functions/TimeSeries/","page":"TimeSeries","title":"TimeSeries","text":"where DS is the system to evolve and is obtained using the function DynSys, Δt is the amount of time recorded and Transient the amount of time evolved before starting to record.","category":"page"},{"location":"Functions/isospike_diagram/#isospike_diagram","page":"isospike_diagram","title":"isospike_diagram","text":"","category":"section"},{"location":"Functions/isospike_diagram/","page":"isospike_diagram","title":"isospike_diagram","text":"The function isospike_diagram is called as:","category":"page"},{"location":"Functions/isospike_diagram/","page":"isospike_diagram","title":"isospike_diagram","text":"isospike_diagram(α_lim::Tuple, Γ_lim::Tuple; n = 4::Int64, N = 396::Int64, x_in = ones(N)::Vector{Float64}, M = 10::Int64)","category":"page"},{"location":"Functions/isospike_diagram/","page":"isospike_diagram","title":"isospike_diagram","text":"It creates two vectors α and Γ:","category":"page"},{"location":"Functions/isospike_diagram/","page":"isospike_diagram","title":"isospike_diagram","text":"α_vals = α_lim[1] : (α_lim[2] - α_lim[1]) / (M - 1) : α_lim[2]\nΓ_vals = Γ_lim[1] : (Γ_lim[2] - Γ_lim[1]) / (M - 1) : Γ_lim[2]\n\nα = collect(α_vals)\nΓ = collect(Γ_vals)","category":"page"},{"location":"Functions/isospike_diagram/","page":"isospike_diagram","title":"isospike_diagram","text":"and it uses them to sweeep the MG equation and save in a matrix pks the amount of peaks for each pair of parameters using the funtion defineAttractor. The function returns the two vectors and the matrix.","category":"page"}]
}
