package com.tns.gen.com.google.android.gms.tasks;

public class OnFailureListener implements com.google.android.gms.tasks.OnFailureListener {
	public OnFailureListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onFailure(java.lang.Exception param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onFailure", void.class, args);
	}

}
