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

$$
\frac{dx}{dt} = \alpha \frac{x_{\Gamma}}{1 + x^{n}_{\Gamma}} - x
$$

where $\alpha$, $\Gamma$ and $n$ are parameters and $x_{\Gamma} = x(t - \Gamma)$
