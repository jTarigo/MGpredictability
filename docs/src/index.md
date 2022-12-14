# Mackey-Glass Predictability

**MGpredictability** is a Julia library for time series analysis

To learn how yo use **MGpredictability** you can see [Getting started](@ref) and [Contents](@ref) for further references.

## Getting started
To install **MGpredictability** you can do:
```julia
using Pkg; Pkg.add("https://github.com/jTarigo/MGpredictability")
```

The library is composed of 


## The Mackey-Glass System

The Mackey-Glass (MG) system was proposed in 1977 to model the process of crations of blood cells in the bone marrow and its realse to the blood stream [Mackey, M. & Glass L. (1977)](10.1126/science.267326). It can be modeled as the following [DDE](https://en.wikipedia.org/wiki/Delay_differential_equation):

```math
\frac{dx}{dt} = \alpha \frac{x_{\Gamma}}{1 + x^{n}_{\Gamma}} - x
```

where $\alpha$, $\Gamma$ and $n$ are parameters and $x_{\Gamma} = x(t - \Gamma)$.

DDEs can be solved by many methods used for solving ODEs like the Runge-Kutta methods. However, for the MG system there is an exact discrete implementation as described in [Amil, P., Cabeza, C., & Marti, A. C. (2015)](https://ieeexplore.ieee.org/abstract/document/7065279?casa_token=p5iYuSdJyAwAAAAA:en0TIBM9894_1ywgHfgXQhD1XRfQEEmUzGibzeXHbZ37Rqcp9bQi9qG0feSOPecJpsyVnlQoN3o).

This implementation leaves the equation as a map of $N$ variables as:
```math
x_{j}(t + 1) = 
\begin{cases} 
x_{j + 1} \quad \quad \quad \quad \qquad \quad \quad \quad \quad \quad if \quad j < N \\
\beta x_j + (1 - \beta) \alpha \frac{x_{j - N +1}}{1 + x^{n}_{j - N +1}} \quad \quad if \quad j = N
\end{cases}
```
where $N$ is the number of points in a time interval $\Gamma$ and $\beta = \exp(\Gamma/N)$. This map has a jacobian of the form:

```math
J = \begin{bmatrix} 
    0 & 1 & 0 & \dots & 0\\
    0 & 0 & 1 & \dots & 0\\
    \vdots & \vdots & \vdots & \ddots & \vdots\\
    0 & 0 & 0 & \dots & 1\\
    \alpha (1 - \beta) \frac{1 - (n - 1) x^n_1}{(1 + x^n_1)^2} & \dots & \dots & \dots & \beta 
    \end{bmatrix}
```
