from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

#def index(request):
    #return HttpResponse("Code Runner :)")

def index(request):
    i_list = ["Hi", 1, 2, 3]

    context = {
        "body":"Hello World",
        "title": "title",
        "item_list": i_list
    }
    return render(request, "base.html", context=context)

def challenge(request):
    i_list = ["Hi", 1, 2, 3]

    context = {
        "body":"Hello World",
        "title": "title",
        "item_list": i_list,
        "page": "challenge page"
    }
    return render(request, "challenge.html", context=context)
