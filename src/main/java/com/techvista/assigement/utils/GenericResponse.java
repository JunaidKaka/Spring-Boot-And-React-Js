package com.techvista.assigement.utils;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class GenericResponse {
	private String code;
	private String message;

	private List<String> errors;
	private List<String> warnings;

	private Object data;

	/**
	 * @param msg
	 */
	public void addError(String msg) {
		if (errors == null) {
			errors = new ArrayList<>();
		}
		errors.add(msg);
	}

	/**
	 * @param msg
	 */
	public void addWarning(String msg) {
		if (warnings == null) {
			warnings = new ArrayList<>();
		}
		warnings.add(msg);
	}

	public  boolean hasError() {
		return this.errors != null && errors.size() > 0;
	}
}

